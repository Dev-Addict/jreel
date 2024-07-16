import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer, ThemeProvider as NavigationThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider, useTheme} from 'styled-components/native';

import {HomeScreen} from '../screens/home.screen';
import {SearchScreen} from '../screens/search.screen';
import {ItemScreen} from '../screens/item.screen';
import {VideoScreen} from '../screens/video.screen';
import {ItemsScreen} from '../screens/items.screen';
import {DownloadsScreen} from '../screens/downloads.screen';
import {GenresScreen} from '../screens/genres.screen';
import {MainTabBar} from './main.tab-bar';
import {HomeIcon} from '../../assets/icons/home.icon';
import {MagnifyingGlassIcon} from '../../assets/icons/magnifying-glass.icon';
import {GroupWatchIcon} from '../../assets/icons/group-watch.icon';
import {DownloadIcon} from '../../assets/icons/download.icon';
import {DARK_THEME, NAVIGATION_DARK_THEME} from '../../constants/themes/dark.theme.constant';
import {LIGHT_THEME, NAVIGATION_LIGHT_THEME} from '../../constants/themes/light.theme.constant';

const MainStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const TabNavigator = () => {
	const theme = useTheme();

	return (
		<MainTab.Navigator tabBar={MainTabBar(theme)}>
			<MainTab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({focused, color, size}) => <HomeIcon color={color} size={size}
																													style={{opacity: focused ? 1 : 0.8}} />,
			}} />
			<MainTab.Screen name="Search" component={SearchScreen} options={{
				tabBarIcon: ({focused, color, size}) => <MagnifyingGlassIcon color={color} size={size}
																																		 style={{opacity: focused ? 1 : 0.8}} />,
			}} />
			<MainTab.Screen name="Genres" component={GenresScreen} options={{
				tabBarIcon: ({focused, color, size}) => <GroupWatchIcon color={color} size={size}
																																style={{opacity: focused ? 1 : 0.8}} />,
			}} />
			<MainTab.Screen name="Downloads" component={DownloadsScreen} options={{
				tabBarIcon: ({focused, color, size}) => <DownloadIcon color={color} size={size}
																															style={{opacity: focused ? 1 : 0.8}} />,
			}} />
		</MainTab.Navigator>
	);
};

export const Layout = () => {
	const colorScheme = useColorScheme();

	const theme = useMemo(
		() => (colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME),
		[colorScheme],
	);
	const navigationTheme = useMemo(
		() =>
			colorScheme === 'dark' ? NAVIGATION_DARK_THEME : NAVIGATION_LIGHT_THEME,
		[colorScheme],
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
