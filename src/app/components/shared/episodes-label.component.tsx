import {FC} from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

import {Text} from './text.component';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import numeral from 'numeral';

const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	background-color: ${({theme}) => theme.colors.primary.m};
	border-radius: 12px;
`;

interface Props extends ViewProps {
	episodes: number;
}

export const EpisodesLabel: FC<Props> = ({episodes, ...props}) => {
	return (
		<Container {...props}>
			<Text type={TypographyType.CAPTION} primary context>
				{episodes}
			</Text>
		</Container>
	);
};
