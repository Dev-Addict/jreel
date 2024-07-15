import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {
	NavigationContainer,
	ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'styled-components/native';

import {HomeScreen} from './screens/home.screen';
import {SearchScreen} from './screens/search.screen';
import {ItemScreen} from './screens/item.screen';
import {VideoScreen} from './screens/video.screen';
import {ItemsScreen} from './screens/items.screen';
import {DownloadsScreen} from './screens/downloads.screen';
import {GenresScreen} from './screens/genres.screen';
import {
	DARK_THEME,
	NAVIGATION_DARK_THEME,
} from '../constants/themes/dark.theme.constant';
import {
	LIGHT_THEME,
	NAVIGATION_LIGHT_THEME,
} from '../constants/themes/light.theme.constant';

const MainStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<MainTab.Navigator>
			<MainTab.Screen name="Home" component={HomeScreen} />
			<MainTab.Screen name="Search" component={SearchScreen} />
			<MainTab.Screen name="Genres" component={GenresScreen} />
			<MainTab.Screen name="Downloads" component={DownloadsScreen} />
		</MainTab.Navigator>
	);
};

export const Layout = () => {
	const colorScheme = useColorScheme();

	const theme = useMemo(
		() => (colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME),
		[colorScheme]
	);
	const navigationTheme = useMemo(
		() =>
			colorScheme === 'dark' ? NAVIGATION_DARK_THEME : NAVIGATION_LIGHT_THEME,
		[colorScheme]
	);

	return (
		<ThemeProvider theme={theme}>
			<NavigationThemeProvider value={navigationTheme}>
				<NavigationContainer>
					<MainStack.Navigator>
						<MainStack.Screen
							name="MainTabs"
							component={TabNavigator}
							options={{headerShown: false}}
						/>
						<MainStack.Screen name="Items" component={ItemsScreen} />
						<MainStack.Screen name="Item" component={ItemScreen} />
						<MainStack.Screen name="Video" component={VideoScreen} />
					</MainStack.Navigator>
				</NavigationContainer>
			</NavigationThemeProvider>
		</ThemeProvider>
	);
};
