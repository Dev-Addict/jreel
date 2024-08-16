import {Fragment, useEffect, useMemo} from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Image as EImage} from 'expo-image';

import {Button} from '../shared/button.component';
import {Text} from '../shared/text.component';
import {PlayIcon} from '../../../assets/icons/play.icon';
import {Flex} from '../shared/flex.component';
import {GET_ITEM_URL, GetItemResponse} from '../../../api/items/get-item.api';
import {processImageUri} from '../../../utils/process-image-uri.util';
import {PromiseStatus} from '../../../types/promise-status.enum';
import {CARD_IMAGE_PLACEHOLDER} from '../../../constants/placeholders.constant';
import {ItemRouteProp} from '../../../types/navigator/route-props/item.route-prop';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {QualityLabel} from '../shared/quality-label.component';
import {ItemCards} from '../home/item-cards/item-cards.component';
import {ItemType} from '../../../types/item-type.enum';
import {ChevronRightIcon} from '../../../assets/icons/chevron-right.icon';
import {Picker} from '@react-native-picker/picker';
import {ItemScreenProps} from '../../../types/navigator/screen-props/item.screen-props';

interface ImageProps {
	width: number;
	height: number;
}

const Image = styled(EImage)<ImageProps>`
	${({width, height}) => ({width, height, minWidth: width, minHeight: height})}
`;

const Main = styled.View`
	padding: 16px;
`;

const fetchItem = (slug: string) => {
	let status = PromiseStatus.PENDING;
	let result: GetItemResponse;
	let error: Error;

	const promise = axios.get<GetItemResponse>(GET_ITEM_URL({slug})).then(
		({data}) => {
			status = PromiseStatus.SUCCESS;
			result = data;
		},
		(err) => {
			status = PromiseStatus.ERROR;
			error = err;
		}
	);

	return {
		read() {
			if (status === PromiseStatus.PENDING) {
				throw promise;
			} else if (status === PromiseStatus.ERROR) {
				throw error;
			} else {
				return result;
			}
		},
	};
};

let resource: {[k: string]: ReturnType<typeof fetchItem>} = {};

export const ItemData = () => {
	const {width, height} = useWindowDimensions();
	const imageHeight = (height * 2) / 3;

	const navigation = useNavigation<ItemScreenProps>();
	const route = useRoute<ItemRouteProp>();

	if (!resource[route.params.slug])
		resource[route.params.slug] = fetchItem(route.params.slug);

	const data = resource[route.params.slug]?.read();

	const title = useMemo(
		() => data?.data?.details?.title?.split(' - ')[0],
		[data]
	);

	const onSeasonChange = (slug: string) => {
		navigation.navigate('Item', {slug});
	};

	const renderSeasons = () =>
		data?.data?.type === ItemType.SHOW &&
		data?.data?.seasons
			.sort()
			.map((season) => (
				<Picker.Item
					label={season.name}
					value={season.slug}
					key={season.slug}
				/>
			));
	const renderEpisodes = () =>
		data?.data?.type === ItemType.SHOW &&
		data?.data?.episodes
			?.sort()
			?.map((episode) => <Button text={episode} key={episode} secondary />);

	useEffect(() => {
		return () => {
			delete resource[route.params.slug];
		};
	}, [route.params.slug]);

	return (
		<ScrollView>
			<Image
				source={{
					uri: processImageUri(data?.data?.details?.poster || '', {
						width,
						height: imageHeight,
					}),
				}}
				placeholder={{
					uri: processImageUri(CARD_IMAGE_PLACEHOLDER, {
						width,
						height: imageHeight,
					}),
				}}
				width={width}
				height={imageHeight}
			/>
			<Main>
				<Text type={TypographyType.HEADING_2} center>
					{title}
				</Text>
				<Flex row center>
					<QualityLabel quality={data?.data?.details?.quality} />
					<Text type={TypographyType.BODY_2} center>
						{' '}
						• {data?.data?.details?.year} • {data?.data?.details?.duration} m •{' '}
						{data?.data?.details?.genres?.join(', ')}
					</Text>
				</Flex>
				<Flex height={8} />
				<Button text="Play" icon={PlayIcon} />
				<Flex height={8} />
				<Text>{data?.data?.details?.description}</Text>
				<Flex height={8} />
				<Text type={TypographyType.BODY_2}>
					<Text type={TypographyType.BODY_2} bold>
						Actors:
					</Text>{' '}
					{data?.data?.details?.actors?.join(', ')}
				</Text>
				<Text type={TypographyType.BODY_2}>
					<Text type={TypographyType.BODY_2} bold>
						Directors:
					</Text>{' '}
					{data?.data?.details?.directors?.join(', ')}
				</Text>
				<Text type={TypographyType.BODY_2}>
					<Text type={TypographyType.BODY_2} bold>
						Country:
					</Text>{' '}
					{data?.data?.details?.countries?.join(', ')}
				</Text>
			</Main>
			{data?.data?.details?.type === ItemType.SHOW && (
				<Picker
					selectedValue={route.params.slug}
					onValueChange={onSeasonChange}>
					{renderSeasons()}
				</Picker>
			)}
			{data?.data?.details?.type === ItemType.SHOW && (
				<Fragment>
					<Flex padding="0 16px">
						<Text type={TypographyType.BODY_1} bold>
							Episodes
						</Text>
					</Flex>
					<Flex height={16} />
					<ScrollView
						horizontal
						contentContainerStyle={{gap: 8, paddingRight: 16, paddingLeft: 16}}
						showsHorizontalScrollIndicator={false}>
						{renderEpisodes()}
					</ScrollView>
				</Fragment>
			)}
			<ItemCards
				title={'Suggestions'}
				items={data?.data?.relatedItems}
				itemType={undefined}
			/>
		</ScrollView>
	);
};
