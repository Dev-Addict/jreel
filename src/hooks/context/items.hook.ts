import {useContext} from 'react';

import {ItemsContext} from '../../contexts/items/items.context';

export const useItems = () => useContext(ItemsContext);
