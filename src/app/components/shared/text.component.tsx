import {FC, useMemo} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

import {DARK_COLOR_GROUP} from '../../../constants/themes/dark.color-group.constant';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {Typography} from '../../../types/theme/typography.type';
import {LIGHT_COLOR_GROUP} from '../../../constants/themes/light.color-group.constant';

interface StyledTextProps {
	color: string;
	typography: Typography;
}

const StyledText = styled(RNText)<StyledTextProps>`
    ${({color, typography}) => ({color, ...typography})}
`;

interface Props extends RNTextProps {
	type?: TypographyType;
	dark?: boolean;
	light?: boolean;
	secondary?: boolean;
	context?: boolean;
}

export const Text: FC<Props> = ({type = TypographyType.BODY_1, dark, light, secondary, context, ...props}) => {
	const theme = useTheme();

	const color = useMemo(() => dark && DARK_COLOR_GROUP.m || light && LIGHT_COLOR_GROUP.m || (secondary && (context && theme.colors.secondary.c || theme.colors.secondary.m)) || theme.colors.foreground.m!, [theme]);
	const typography = useMemo(() => theme.typographies[type], [theme.typography, type]);

	return <StyledText {...props} color={color} typography={typography} />;
};

export type TextProps = Props;
