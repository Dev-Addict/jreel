import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {MainStackParamList} from '../main-stack.param-list.type';

export type ItemScreenProps = BottomTabNavigationProp<
	MainStackParamList,
	'Item'
>;
