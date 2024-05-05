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
