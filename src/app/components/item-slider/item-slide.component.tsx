import {FC} from 'react';
import numeral from 'numeral';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

import {Text} from '../shared/text.component';
import {QualityLabel} from '../shared/quality-label.component';
import {processImageUri} from '../../../utils/process-image-uri.util';
import {Item} from '../../../types/models/item.model';
import {TypographyType} from '../../../types/theme/typography-type.enum';

interface ContainerProps {
	width: number;
	height: number;
}

const Container = styled.View<ContainerProps>`
	${({width, height}) => ({width, height})}
`;

const Gradient = styled(LinearGradient)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 50%;
`;

const Details = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
`;

interface ImageProps {
	width: number;
	height: number;
}

const Image = styled.Image<ImageProps>`
	${({width, height}) => ({width, height, minWidth: width, minHeight: height})}
`;

const Content = styled.View`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	padding: 24px;
`;

interface Props {
	item: Item;
	width: number;
	height: number;
}

export const ItemSlide: FC<Props> = ({item, width, height}) => {
	return (
		<Container width={width} height={height}>
			<Image
				source={{uri: processImageUri(item.banner[0], {width, height})}}
				width={width}
				height={height}
			/>
			<Gradient colors={['#000000', 'transparent']} />
			<Content>
				<Text type={TypographyType.HEADING_2} light>
					{item.title}
				</Text>
				<Details>
					<QualityLabel quality={item.quality} />
					{item.imdb && (
						<Text type={TypographyType.BODY_2} light>
							{numeral(item.imdb / 10).format('0.0')}
						</Text>
					)}
					{item.duration && (
						<Text type={TypographyType.BODY_2} light>
							{item.duration} mins
						</Text>
					)}
					{item.genres.length > 0 && (
						<Text type={TypographyType.BODY_2} light>
							{item.genres.map(({name}) => name).join(', ')}
						</Text>
					)}
				</Details>
			</Content>
		</Container>
	);
};
