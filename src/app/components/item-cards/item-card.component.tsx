import {FC, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
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

const QualityContainer = styled.View`
	position: absolute;
	top: 8px;
	right: 8px;
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
	right: 0;
	bottom: 0;
	left: 0;
	padding: 8px;
`;

interface Props {
	item: Item;
	width: number;
	height: number;
}

export const ItemCard: FC<Props> = ({item, width, height}) => {
	const onPress = useCallback(() => {}, []);

	return (
		<TouchableOpacity onPress={onPress}>
			<Container width={width} height={height}>
				<Image
					source={{uri: processImageUri(item.poster[0], {width, height})}}
					width={width}
					height={height}
				/>
				<Gradient colors={['transparent', '#000000']} />
				<QualityContainer>
					<QualityLabel quality={item.quality} />
				</QualityContainer>
				<Content>
					<Text type={TypographyType.CAPTION} light>
						{item.title}
					</Text>
				</Content>
			</Container>
		</TouchableOpacity>
	);
};
