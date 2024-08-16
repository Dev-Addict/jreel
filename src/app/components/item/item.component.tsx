import {Suspense} from 'react';

import {ItemData} from './item-data.component';
import {Text} from '../shared/text.component';

export const Item = () => {
	return (
		<Suspense fallback={<Text>Loading...</Text>}>
			<ItemData />
		</Suspense>
	);
};
