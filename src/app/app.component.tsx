import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native';

import {LIGHT_THEME} from '../constants/themes/light.theme.constant';
import {DARK_THEME} from '../constants/themes/dark.theme.constant';

export const App = () => {
	const colorScheme = useColorScheme();

	const theme = useMemo(() => colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME, [colorScheme]);

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
};
