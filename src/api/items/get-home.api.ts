import {API_URL} from '../../utils/env.util';
import {MovieCardData} from '../../types/api/items/movie-card-data.type';
import {ShowCardData} from '../../types/api/items/show-card-data.type';
import {SlideData} from '../../types/api/items/slide-data.type';
import {ApiResponse} from '../../types/api/api-response.type';

export const GET_HOME_URL = `${API_URL}/items/home`;

export type GetHomeResponse = ApiResponse<{
	suggestions: MovieCardData[];
	latestMovies: MovieCardData[];
	latestShows: ShowCardData[];
	sliderItems: SlideData[];
}>;
