import {useEffect} from 'react';
import {SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font';

import {Layout} from './layout/layout.component';

SplashScreen.preventAutoHideAsync();

export const App = () => {
	const [loaded, error] = useFonts({
		Inter: require('../../assets/fonts/Inter-VariableFont.ttf'),
	});

	useEffect(() => {
		if (loaded || error) SplashScreen.hideAsync();
	}, [loaded, error]);

	return <Layout />;
};
