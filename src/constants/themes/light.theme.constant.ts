import {DefaultTheme, Theme as NavigationTheme} from '@react-navigation/native';

import {SHARED_COLORS_THEME} from './shared-colors.theme.constant';
import {TYPOGRAPHY_THEME} from './typography.theme.constant';
import {LIGHT_COLOR_GROUP} from './light.color-group.constant';
import {DARK_COLOR_GROUP} from './dark.color-group.constant';
import {Theme} from '../../types/theme/theme.type';

export const LIGHT_THEME: Theme = {
	colors: {
		...SHARED_COLORS_THEME,
		foreground: DARK_COLOR_GROUP,
		background: LIGHT_COLOR_GROUP,
	},
	typographies: TYPOGRAPHY_THEME,
};

export const NAVIGATION_LIGHT_THEME: NavigationTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: LIGHT_THEME.colors.primary.m ?? DefaultTheme.colors.primary,
		background:
			LIGHT_THEME.colors.background.m ?? DefaultTheme.colors.background,
		card: LIGHT_THEME.colors.neutral.v7 ?? DefaultTheme.colors.card,
		text: LIGHT_THEME.colors.foreground.a ?? DefaultTheme.colors.text,
		border: LIGHT_THEME.colors.neutral.v6 ?? DefaultTheme.colors.border,
		notification:
			LIGHT_THEME.colors.danger.m ?? DefaultTheme.colors.notification,
	},
};
