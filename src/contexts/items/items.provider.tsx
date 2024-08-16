import {FC, PropsWithChildren, useCallback, useState} from 'react';

import {ItemsContext} from './items.context';
import {GET_HOME_URL, GetHomeResponse} from '../../api/items/get-home.api';
import axios from 'axios';

export const ItemsProvider: FC<PropsWithChildren> = ({children}) => {
	const [home, setHome] = useState<GetHomeResponse['data'] | null>(null);
	const [isHomeLoaded, setIsHomeLoaded] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const loadHome = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await axios.get<GetHomeResponse>(GET_HOME_URL);
			setHome(response.data.data);
			setIsHomeLoaded(true);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<ItemsContext.Provider
			value={{home, loadHome, isHomeLoaded, isLoading, isError}}>
			{children}
		</ItemsContext.Provider>
	);
};
