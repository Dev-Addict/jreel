import {TypographyTheme} from '../../types/theme/typography-theme.type';
import {TypographyType} from '../../types/theme/typography-type.enum';

export const TYPOGRAPHY_THEME: TypographyTheme = {
	[TypographyType.HEADING_1]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 24,
		fontWeight: 500,
		lineHeight: '32px',
	},
	[TypographyType.HEADING_2]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 20,
		fontWeight: 500,
		lineHeight: '28px',
	},
	[TypographyType.BODY_1]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 16,
		fontWeight: 400,
	},
	[TypographyType.BODY_2]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 14,
		fontWeight: 400,
	},
	[TypographyType.PARAGRAPH]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 14,
		fontWeight: 400,
		lineHeight: '20px',
	},
	[TypographyType.BUTTON]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 14,
		fontWeight: 700,
	},
	[TypographyType.CAPTION]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 12,
		fontWeight: 400,
	},
	[TypographyType.OVERLINE]: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 10,
		fontWeight: 400,
	},
};
