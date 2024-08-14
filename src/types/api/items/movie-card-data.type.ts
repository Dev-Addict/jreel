import {CardData} from './card-data.type';
import {Quality} from '../../quality.enum';

export interface MovieCardData extends CardData {
	quality: Quality;
}
