import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import {Theme} from '../../types/theme/theme.type';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 16px 16px 16px;
    background-color: ${({theme}: {theme: Theme}) => theme.colors.background.m};
		elevation: 4;
`;

const IconTouchable = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    flex: 1;
`;

export const MainTabBar = (theme: Theme) => ({state, descriptors, navigation}: BottomTabBarProps) => {
	return (
		<Container>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const Icon = options.tabBarIcon;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<IconTouchable
						accessibilityRole="button"
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						key={route.key}
					>
						{Icon && Icon({focused: isFocused, color: theme.colors.foreground.m!, size: 24})}
					</IconTouchable>
				);
			})}
		</Container>
	);
};
