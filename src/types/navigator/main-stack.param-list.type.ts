import {ParamListBase} from '@react-navigation/native';

import {MainTabParamList} from './main-tab.param-list.type';

export interface MainStackParamList extends ParamListBase {
	MainTab: MainTabParamList;
	Items: {};
	Item: {id: string};
	Video: {id: string};
}
