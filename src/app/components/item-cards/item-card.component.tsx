import {FC, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image as EImage} from 'expo-image';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

import {Text} from '../shared/text.component';
import {QualityLabel} from '../shared/quality-label.component';
import {EpisodesLabel} from '../shared/episodes-label.component';
import {processImageUri} from '../../../utils/process-image-uri.util';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {ItemType} from '../../../types/item-type.enum';
import {CARD_IMAGE_PLACEHOLDER} from '../../../constants/placeholders.constant';
import {MovieCardData} from '../../../types/api/items/movie-card-data.type';
import {ShowCardData} from '../../../types/api/items/show-card-data.type';
import {HomeScreenProps} from '../../../types/navigator/screen-props/home.screen-props';

interface ContainerProps {
	width: number;
	height: number;
}

const Container = styled.View<ContainerProps>`
	border-radius: 8px;
	overflow: hidden;

	${({width, height}) => ({width, height})}
`;

const Gradient = styled(LinearGradient)`
	position: absolute;
	top: 50%;
	right: 0;
	bottom: 0;
	left: 0;
`;

const LabelContainer = styled.View`
	position: absolute;
	top: 8px;
	right: 8px;
`;

interface ImageProps {
	width: number;
	height: number;
}

const Image = styled(EImage)<ImageProps>`
	background-color: ${({
		theme: {
			colors: {background},
		},
	}) => background.v1};
	${({width, height}) => ({width, height, minWidth: width, minHeight: height})}
`;

const Content = styled.View`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 8px;
`;

type Props = {
	width: number;
	height: number;
} & (
	| {
			item: MovieCardData;
			itemType: ItemType.MOVIE;
	  }
	| {
			item: ShowCardData;
			itemType: ItemType.SHOW;
	  }
);

export const ItemCard: FC<Props> = ({item, width, height, itemType}) => {
	const navigation = useNavigation<HomeScreenProps>();

	const onPress = useCallback(() => {
		navigation.navigate('Item', {slug: item.slug});
	}, [item.slug]);

	return (
		<TouchableOpacity onPress={onPress}>
			<Container width={width} height={height}>
				<Image
					source={processImageUri(item.poster || '', {width, height})}
					placeholder={processImageUri(CARD_IMAGE_PLACEHOLDER, {width, height})}
					width={width}
					height={height}
				/>
				<Gradient colors={['transparent', '#000000']} />
				<LabelContainer>
					{itemType === ItemType.SHOW ? (
						<EpisodesLabel episodes={item.episodes} />
					) : (
						<QualityLabel quality={item.quality} />
					)}
				</LabelContainer>
				<Content>
					<Text type={TypographyType.CAPTION} light>
						{item.title}
					</Text>
				</Content>
			</Container>
		</TouchableOpacity>
	);
};
