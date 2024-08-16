import {FC, useMemo} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled, {css, useTheme} from 'styled-components/native';

import {DARK_COLOR_GROUP} from '../../../constants/themes/dark.color-group.constant';
import {TypographyType} from '../../../types/theme/typography-type.enum';
import {Typography} from '../../../types/theme/typography.type';
import {LIGHT_COLOR_GROUP} from '../../../constants/themes/light.color-group.constant';

interface StyledTextProps {
	color: string;
	typography: Typography;
	center: boolean;
	uppercase: boolean;
	bold: boolean;
}

const StyledText = styled(RNText)<StyledTextProps>`
	${({center}) =>
		center &&
		css`
			text-align: center;
		`}

	${({uppercase}) =>
		uppercase &&
		css`
			text-transform: uppercase;
		`}

    ${({color, typography}) => ({color, ...typography})}

    ${({bold}) =>
		bold &&
		css`
			font-weight: bold;
		`}
`;

interface Props extends RNTextProps {
	type?: TypographyType;
	dark?: boolean;
	light?: boolean;
	primary?: boolean;
	secondary?: boolean;
	context?: boolean;
	center?: boolean;
	uppercase?: boolean;
	bold?: boolean;
}

export const Text: FC<Props> = ({
	type = TypographyType.BODY_1,
	dark,
	light,
	primary,
	secondary,
	context,
	center = false,
	uppercase = false,
	bold = false,
	...props
}) => {
	const theme = useTheme();

	const color = useMemo(
		() =>
			(dark && DARK_COLOR_GROUP.m) ||
			(light && LIGHT_COLOR_GROUP.m) ||
			(primary &&
				((context && theme.colors.primary.c) || theme.colors.primary.m)) ||
			(secondary &&
				((context && theme.colors.secondary.c) || theme.colors.secondary.m)) ||
			theme.colors.foreground.m!,
		[theme]
	);
	const typography = useMemo(
		() => theme.typographies[type],
		[theme.typography, type]
	);

	return (
		<StyledText
			{...props}
			color={color}
			typography={typography}
			center={center}
			uppercase={uppercase}
			bold={bold}
		/>
	);
};

export type TextProps = Props;
