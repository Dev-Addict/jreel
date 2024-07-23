import {Screen} from '../components/shared/screen.component';
import {ItemSlider} from '../components/item-slider/item-slider.component';
import {ItemCards} from '../components/item-cards/item-cards.component';
import {ITEMS} from '../../constants/data.constant';

export const HomeScreen = () => {
	return (
		<Screen>
			<ItemSlider />
			<ItemCards title="Suggestions" items={ITEMS} />
			<ItemCards title="Latest Movies" items={ITEMS} />
			<ItemCards title="Latest Shows" items={ITEMS} />
		</Screen>
	);
};
