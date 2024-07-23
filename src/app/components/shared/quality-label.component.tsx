import {FC} from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

import {Text} from './text.component';
import {Quality} from '../../../types/quality.enum';
import {TypographyType} from '../../../types/theme/typography-type.enum';

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.secondary.m};
		padding: 2px 4px;
		border-radius: 4px;
`;

interface Props extends ViewProps {
	quality: Quality;
}

export const QualityLabel: FC<Props> = ({quality, ...props}) => {
	return (
		<Container {...props}>
			<Text type={TypographyType.CAPTION} secondary context>{quality}</Text>
		</Container>
	);
};
