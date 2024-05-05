import {TypographyType} from './typography-type.enum';
import {Typography} from './typography.type';

export type TypographyTheme = {[k in TypographyType]: Typography};
