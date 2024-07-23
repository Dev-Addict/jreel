import {Actor} from './actor.model';
import {Country} from './country.model';
import {Director} from './director.model';
import {Genre} from './genre.model';
import {ItemType} from '../item-type.enum';
import {Quality} from '../quality.enum';

export interface Item {
	id: string;
	title: string;
	shortDescription: string;
	type: ItemType;
	episodes?: number;
	poster: string[];
	banner: string[];
	genres: Genre[];
	actors: Actor[];
	directors: Director[];
	country: Country[];
	duration: number;
	quality: Quality;
	year: number;
	imdb: number;
	related: Item[];
}
