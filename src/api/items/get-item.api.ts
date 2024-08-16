import {API_URL} from '../../utils/env.util';
import {Quality} from '../../types/quality.enum';
import {ItemType} from '../../types/item-type.enum';
import {ApiResponse} from '../../types/api/api-response.type';
import {RelatedItemCardData} from '../../types/api/items/related-item-card-data.type';
import {SeasonData} from '../../types/api/items/season-data.type';

interface Options {
	slug: string;
}

export const GET_ITEM_URL = ({slug}: Options) => `${API_URL}/items/${slug}`;

export type GetItemResponse = ApiResponse<
	{
		details: {
			poster: string;
			title: string;
			description: string;
			genres: string[];
			actors: string[];
			directors: string[];
			countries: string[];
			duration: number;
			quality: Quality;
			year: string;
			imdb: number;
			type: ItemType;
		};
		servers: string[];
		episodes: string[];
		relatedItems: RelatedItemCardData[];
	} & (
		| {
				type: ItemType.MOVIE;
		  }
		| {
				type: ItemType.SHOW;
				seasons: SeasonData[];
		  }
	)
>;
