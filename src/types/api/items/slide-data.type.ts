import {Quality} from '../../quality.enum';

export interface SlideData {
	banner: string;
	title: string;
	quality: Quality;
	imdb: number;
	duration: number;
	genres: string[];
	description: string;
	slug: string;
}
