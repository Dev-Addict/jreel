import 'styled-components/native';

import {Theme} from '../../../types/theme/theme.type';

declare module 'styled-components/native' {
	interface DefaultTheme extends Theme {
	}
}
