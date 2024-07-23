import {Actor} from '../types/models/actor.model';
import {Country} from '../types/models/country.model';
import {Director} from '../types/models/director.model';
import {Genre} from '../types/models/genre.model';
import {ItemType} from '../types/item-type.enum';
import {Item} from '../types/models/item.model';
import {Quality} from '../types/quality.enum';

const GENRES: Genre[] = [
	{
		id: '1',
		name: 'Drama',
	},
	{
		id: '2',
		name: 'Crime',
	},
	{
		id: '3',
		name: 'History',
	},
	{
		id: '4',
		name: 'Biography',
	},
	{
		id: '5',
		name: 'Horror',
	},
	{
		id: '6',
		name: 'RealityTV',
	},
];

const ACTORS: Actor[] = [
	{
		id: '1',
		name: 'Leonardo DiCaprio',
	},
	{
		id: '2',
		name: 'Robert De Niro',
	},
	{
		id: '3',
		name: 'Jesse Plemons',
	},
	{
		id: '4',
		name: 'Lily Gladstone',
	},
	{
		id: '5',
		name: 'Tantoo Cardinal',
	},
	{
		id: '6',
		name: 'Cillian Murphy',
	},
	{
		id: '7',
		name: 'Emily Blunt',
	},
	{
		id: '8',
		name: 'Robert Downey Jr',
	},
	{
		id: '9',
		name: 'Alden Ehrenreich',
	},
	{
		id: '10',
		name: 'Scott Grimes',
	},
	{
		id: '11',
		name: 'Corey Hawkins',
	},
	{
		id: '12',
		name: 'Aisling Franciosi',
	},
	{
		id: '13',
		name: 'Liam Cunningham',
	},
	{
		id: '14',
		name: 'David Dastmalchian',
	},
	{
		id: '15',
		name: 'Chris Walley',
	},
];

const DIRECTORS: Director[] = [
	{
		id: '1',
		name: 'Martin Scorsese',
	},
	{
		id: '2',
		name: 'Christopher Nolan',
	},
	{
		id: '3',
		name: 'André Øvredal',
	},
];

const COUNTRIES: Country[] = [
	{
		id: '1',
		name: 'United States',
		code: 'US',
	},
	{
		id: '2',
		name: 'United Kingdom',
		code: 'UK',
	},
	{
		id: '3',
		name: 'Malta',
		code: 'MT',
	},
];

export const ITEMS: Item[] = [
	{
		id: '1',
		title: 'Killers of the Flower Moon',
		shortDescription:
			'Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s sparking a major F.B.I. investigation involving J. Edgar Hoover.',
		type: ItemType.MOVIE,
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		genres: [GENRES[1], GENRES[3], GENRES[4]],
		actors: [ACTORS[0], ACTORS[1], ACTORS[2], ACTORS[3], ACTORS[4]],
		directors: [DIRECTORS[0]],
		country: [COUNTRIES[0]],
		duration: 206,
		quality: Quality.HD,
		year: 2023,
		imdb: 83,
		related: [],
	},
	{
		id: '2',
		title: 'Oppenheimer',
		type: ItemType.MOVIE,
		shortDescription:
			'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		genres: [GENRES[0], GENRES[1], GENRES[2]],
		actors: [ACTORS[5], ACTORS[6], ACTORS[7], ACTORS[8], ACTORS[9]],
		directors: [DIRECTORS[1]],
		country: [COUNTRIES[0]],
		duration: 180,
		quality: Quality.HD,
		year: 2023,
		imdb: 90,
		related: [],
	},
	{
		id: '3',
		title: 'The Last Voyage of the Demeter',
		type: ItemType.MOVIE,
		shortDescription:
			'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.',
		poster: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		banner: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		genres: [GENRES[4]],
		actors: [ACTORS[10], ACTORS[11], ACTORS[12], ACTORS[13], ACTORS[14]],
		directors: [DIRECTORS[2]],
		country: [COUNTRIES[0], COUNTRIES[1], COUNTRIES[2]],
		duration: 118,
		quality: Quality.HD,
		year: 2023,
		imdb: 66,
		related: [],
	},
	{
		id: '4',
		title: 'Killers of the Flower Moon',
		type: ItemType.MOVIE,
		shortDescription:
			'Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s sparking a major F.B.I. investigation involving J. Edgar Hoover.',
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		genres: [GENRES[1], GENRES[3], GENRES[4]],
		actors: [ACTORS[0], ACTORS[1], ACTORS[2], ACTORS[3], ACTORS[4]],
		directors: [DIRECTORS[0]],
		country: [COUNTRIES[0]],
		duration: 206,
		quality: Quality.HD,
		year: 2023,
		imdb: 83,
		related: [],
	},
	{
		id: '5',
		title: 'Oppenheimer',
		type: ItemType.MOVIE,
		shortDescription:
			'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		genres: [GENRES[0], GENRES[1], GENRES[2]],
		actors: [ACTORS[5], ACTORS[6], ACTORS[7], ACTORS[8], ACTORS[9]],
		directors: [DIRECTORS[1]],
		country: [COUNTRIES[0]],
		duration: 180,
		quality: Quality.HD,
		year: 2023,
		imdb: 90,
		related: [],
	},
	{
		id: '6',
		title: 'The Last Voyage of the Demeter',
		type: ItemType.MOVIE,
		shortDescription:
			'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.',
		poster: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		banner: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		genres: [GENRES[4]],
		actors: [ACTORS[10], ACTORS[11], ACTORS[12], ACTORS[13], ACTORS[14]],
		directors: [DIRECTORS[2]],
		country: [COUNTRIES[0], COUNTRIES[1], COUNTRIES[2]],
		duration: 118,
		quality: Quality.HD,
		year: 2023,
		imdb: 66,
		related: [],
	},
	{
		id: '7',
		title: 'Killers of the Flower Moon',
		type: ItemType.MOVIE,
		shortDescription:
			'Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s sparking a major F.B.I. investigation involving J. Edgar Hoover.',
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/killers-of-the-flower-moon-1630855942.jpg',
		],
		genres: [GENRES[1], GENRES[3], GENRES[4]],
		actors: [ACTORS[0], ACTORS[1], ACTORS[2], ACTORS[3], ACTORS[4]],
		directors: [DIRECTORS[0]],
		country: [COUNTRIES[0]],
		duration: 206,
		quality: Quality.HD,
		year: 2023,
		imdb: 83,
		related: [],
	},
	{
		id: '8',
		title: 'Oppenheimer',
		type: ItemType.MOVIE,
		shortDescription:
			'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
		poster: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		banner: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/oppenheimer-1630855498.jpg',
		],
		genres: [GENRES[0], GENRES[1], GENRES[2]],
		actors: [ACTORS[5], ACTORS[6], ACTORS[7], ACTORS[8], ACTORS[9]],
		directors: [DIRECTORS[1]],
		country: [COUNTRIES[0]],
		duration: 180,
		quality: Quality.HD,
		year: 2023,
		imdb: 90,
		related: [],
	},
	{
		id: '9',
		title: 'The Last Voyage of the Demeter',
		type: ItemType.MOVIE,
		shortDescription:
			'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.',
		poster: [
			'https://img.cdno.my.id/cover/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		banner: [
			'https://img.cdno.my.id/thumb/w_$width/h_$height/the-last-voyage-of-the-demeter-1630855610.jpg',
		],
		genres: [GENRES[4]],
		actors: [ACTORS[10], ACTORS[11], ACTORS[12], ACTORS[13], ACTORS[14]],
		directors: [DIRECTORS[2]],
		country: [COUNTRIES[0], COUNTRIES[1], COUNTRIES[2]],
		duration: 118,
		quality: Quality.HD,
		year: 2023,
		imdb: 66,
		related: [],
	},
];

export const SLIDER_ITEMS = ITEMS.slice(0, 3);
