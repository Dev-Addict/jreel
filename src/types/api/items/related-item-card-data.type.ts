import {ItemType} from '../../item-type.enum';

export type RelatedItemCardData = {
	slug: string;
	poster: string;
	title: string;
} & ({type: ItemType.MOVIE} | {type: ItemType.SHOW; episodes: number});
