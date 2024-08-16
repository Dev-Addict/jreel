import {useEffect} from 'react';

import {Screen} from '../components/shared/screen.component';
import {ItemSlider} from '../components/home/item-slider/item-slider.component';
import {ItemCards} from '../components/home/item-cards/item-cards.component';
import {useItems} from '../../hooks/context/items.hook';
import {ItemType} from '../../types/item-type.enum';

export const HomeScreen = () => {
	const {home, loadHome, isHomeLoaded, isLoading, isError} = useItems();

	useEffect(() => {
		if (!isHomeLoaded && !isLoading && !isError) {
			loadHome();
		}
	}, [isHomeLoaded, isLoading, isError]);

	return (
		<Screen>
			<ItemSlider items={home?.sliderItems || []} skeleton={!isHomeLoaded} />
			<ItemCards
				title="Suggestions"
				items={home?.suggestions || []}
				skeleton={!isHomeLoaded}
				itemType={ItemType.MOVIE}
			/>
			<ItemCards
				title="Latest Movies"
				items={home?.latestMovies || []}
				skeleton={!isHomeLoaded}
				itemType={ItemType.MOVIE}
			/>
			<ItemCards
				title="Latest Shows"
				items={home?.latestShows || []}
				skeleton={!isHomeLoaded}
				itemType={ItemType.SHOW}
			/>
		</Screen>
	);
};
