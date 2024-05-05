import {ColorTheme} from '../../types/theme/color-theme.type';
import {DARK_COLOR_GROUP} from './dark.color-group.constant';

export const SHARED_COLORS_THEME: Omit<
	ColorTheme,
	'background' | 'foreground'
> = {
	primary: {
		m: '#7FC8F8',
		v1: '#B1DEFB',
		v2: '#D8EEFD',
		c: DARK_COLOR_GROUP.m,
		c1: DARK_COLOR_GROUP.m,
		c2: DARK_COLOR_GROUP.m,
	},
	secondary: {
		m: '#FFE45E',
		v1: '#FFEB85',
		v2: '#FFF1AD',
		c: DARK_COLOR_GROUP.m,
		c1: DARK_COLOR_GROUP.m,
		c2: DARK_COLOR_GROUP.m,
	},
	neutral: {
		v1: '#F9F9F9',
		v2: '#EDEDED',
		v3: '#D9D9D9',
		v4: '#BFBFBF',
		v5: '#8C8C8C',
		v6: '#595959',
		v7: '#262626',
	},
	success: {
		m: '#51E18D',
		v1: '#73E7A4',
		v2: '#96EDBB',
		c: DARK_COLOR_GROUP.m,
		c1: DARK_COLOR_GROUP.m,
		c2: DARK_COLOR_GROUP.m,
	},
	warning: {
		m: '#FFE45E',
		v1: '#FFEB85',
		v2: '#FFF1AD',
		c: DARK_COLOR_GROUP.m,
		c1: DARK_COLOR_GROUP.m,
		c2: DARK_COLOR_GROUP.m,
	},
	danger: {
		m: '#FC5F67',
		v1: '#FD878D',
		v2: '#FD9BA0',
		c: DARK_COLOR_GROUP.m,
		c1: DARK_COLOR_GROUP.m,
		c2: DARK_COLOR_GROUP.m,
	},
};
