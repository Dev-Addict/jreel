import {FC} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {Text} from './text.component';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {SVGProps} from '../../../types/svg.props';

interface ContainerProps {
	secondary?: boolean;
}

const Container = styled.View<ContainerProps>`
	padding: 12px;
	background-color: ${({theme, secondary}) =>
		secondary ? theme.colors.secondary.m : theme.colors.primary.m};
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

interface Props extends TouchableOpacityProps {
	text: string;
	icon?: FC<SVGProps>;
	secondary?: boolean;
}

export const Button: FC<Props> = ({text, icon: Icon, secondary, ...props}) => {
	return (
		<TouchableOpacity {...props}>
			<Container secondary={secondary}>
				{Icon && <Icon size={16} />}
				<Text
					type={TypographyType.BUTTON}
					primary={!secondary}
					secondary={secondary}
					context
					uppercase>
					{text}
				</Text>
			</Container>
		</TouchableOpacity>
	);
};
