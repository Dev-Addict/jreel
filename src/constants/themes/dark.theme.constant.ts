import {DarkTheme, Theme as NavigationTheme} from '@react-navigation/native';

import {SHARED_COLORS_THEME} from './shared-colors.theme.constant';
import {TYPOGRAPHY_THEME} from './typography.theme.constant';
import {LIGHT_COLOR_GROUP} from './light.color-group.constant';
import {DARK_COLOR_GROUP} from './dark.color-group.constant';
import {Theme} from '../../types/theme/theme.type';

export const DARK_THEME: Theme = {
	colors: {
		...SHARED_COLORS_THEME,
		foreground: LIGHT_COLOR_GROUP,
		background: DARK_COLOR_GROUP,
	},
	typographies: TYPOGRAPHY_THEME,
};

export const NAVIGATION_DARK_THEME: NavigationTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: DARK_THEME.colors.primary.m ?? DarkTheme.colors.primary,
		background: DARK_THEME.colors.background.m ?? DarkTheme.colors.background,
		card: DARK_THEME.colors.neutral.v7 ?? DarkTheme.colors.card,
		text: DARK_THEME.colors.foreground.m ?? DarkTheme.colors.text,
		border: DARK_THEME.colors.neutral.v6 ?? DarkTheme.colors.border,
		notification: DARK_THEME.colors.danger.m ?? DarkTheme.colors.notification,
	},
};
