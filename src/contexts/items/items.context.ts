import {createContext} from 'react';

import {GetHomeResponse} from '../../api/items/get-home.api';

export interface ItemsContextType {
	home: GetHomeResponse['data'] | null;
	loadHome: () => Promise<void> | void;
	isHomeLoaded: boolean;
	isLoading: boolean;
	isError: boolean;
}

export const ItemsContext = createContext<ItemsContextType>({
	home: null,
	loadHome: () => {},
	isHomeLoaded: false,
	isLoading: false,
	isError: false,
});
