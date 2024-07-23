import {FC} from 'react';
import styled from 'styled-components/native';

import {Text} from '../shared/text.component';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {ChevronRightIcon} from '../../../assets/icons/chevron-right.icon';
import {ItemCard} from './item-card.component';
import {Item} from '../../../types/models/item.model';

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

interface Props {
	title: string;
	items: Item[];
}

export const ItemCards: FC<Props> = ({title, items}) => {
	const renderCards = () =>
		items.map((item) => (
			<ItemCard key={item.id} item={item} width={120} height={190} />
		));

	return (
		<Container>
			<Title>
				<Text type={TypographyType.BODY_1}>{title}</Text>
				<ChevronRightIcon size={16} />
			</Title>
			<Cards
				horizontal
				contentContainerStyle={{gap: 12, paddingRight: 16, paddingLeft: 16}}
				showsHorizontalScrollIndicator={false}>
				{renderCards()}
			</Cards>
		</Container>
	);
};
