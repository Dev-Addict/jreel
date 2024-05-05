import {ColorGroup} from './color-group.type';

export interface ColorTheme {
	primary: ColorGroup;
	secondary: ColorGroup;
	foreground: ColorGroup;
	background: ColorGroup;
	neutral: ColorGroup;
	success: ColorGroup;
	warning: ColorGroup;
	danger: ColorGroup;
}
