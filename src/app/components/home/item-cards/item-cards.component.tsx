import {FC, useCallback} from 'react';
import styled from 'styled-components/native';

import {Text} from '../../shared/text.component';
import {TypographyType} from '../../../../types/theme/typography-type.enum';
import {ChevronRightIcon} from '../../../../assets/icons/chevron-right.icon';
import {ItemCard} from './item-card.component';
import {MovieCardData} from '../../../../types/api/items/movie-card-data.type';
import {ShowCardData} from '../../../../types/api/items/show-card-data.type';
import {ItemCardSkeleton} from './item-card.skeleton';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../../../../types/navigator/screen-props/home.screen-props';
import {ItemType} from '../../../../types/item-type.enum';
import {RelatedItemCardData} from '../../../../types/api/items/related-item-card-data.type';

const Container = styled.View`
	margin: 16px 0;
	gap: 12px;
`;

const Title = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 4px;
	margin: 0 16px;
`;

const Cards = styled.ScrollView``;

type Props = {
	title: string;
	skeleton?: boolean;
} & (
	| {
			items: MovieCardData[];
			itemType: ItemType.MOVIE;
	  }
	| {
			items: ShowCardData[];
			itemType: ItemType.SHOW;
	  }
	| {
			items: RelatedItemCardData[];
			itemType?: undefined;
	  }
);

export const ItemCards: FC<Props> = ({title, items, itemType, skeleton}) => {
	const navigation = useNavigation<HomeScreenProps>();

	const onTitlePress = useCallback(() => {
		navigation.navigate('Items', {itemType});
	}, [itemType]);

	const renderCards = () =>
		skeleton
			? new Array(16)
					.fill(null)
					.map((_, index) => (
						<ItemCardSkeleton key={index} width={120} height={190} />
					))
			: itemType == ItemType.SHOW
				? items.map((item) => (
						<ItemCard
							key={item.slug}
							item={item}
							width={120}
							height={190}
							itemType={itemType}
						/>
					))
				: itemType
					? items.map((item) => (
							<ItemCard
								key={item.slug}
								item={item}
								width={120}
								height={190}
								itemType={itemType}
							/>
						))
					: items.map((item) => (
							<ItemCard
								key={item.slug}
								item={item}
								width={120}
								height={190}
								itemType={itemType}
							/>
						));

	return (
		<Container>
			<TouchableOpacity onPress={onTitlePress}>
				<Title>
					<Text type={TypographyType.BODY_1}>{title}</Text>
					<ChevronRightIcon size={16} />
				</Title>
			</TouchableOpacity>
			<Cards
				horizontal
				contentContainerStyle={{gap: 12, paddingRight: 16, paddingLeft: 16}}
				showsHorizontalScrollIndicator={false}>
				{renderCards()}
			</Cards>
		</Container>
	);
};
