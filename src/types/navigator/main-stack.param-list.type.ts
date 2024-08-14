import {ParamListBase} from '@react-navigation/native';

import {ItemType} from '../item-type.enum';

export interface MainStackParamList extends ParamListBase {
	MainTab: {};
	Items: {itemType: ItemType};
	Item: {slug: string};
	Video: {slug: string; server: string; episode: string};
}
