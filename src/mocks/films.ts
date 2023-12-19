import { Film } from '../types/types';

const FILM_URL = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

export const films: Film [] = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    genre: 'Romance',
    year: 2017,
    rating: 8.87,
    poster: 'img/bohemian-rhapsody.jpg',
    video: FILM_URL
  },
  {
    id: 2,
    title: 'Macbeth',
    genre: '',
    year: 2008,
    rating: 8.87,
    poster: 'img/macbeth.jpg',
    video: FILM_URL
  },
  {
    id: 3,
    title: 'Aviator',
    genre: '',
    year: 2015,
    rating: 8.87,
    poster: 'img/aviator.jpg',
    video: FILM_URL
  },
  {
    id: 4,
    title: 'We need to talk about Kevin',
    genre: '',
    year: 1998,
    rating: 8.87,
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    video: FILM_URL
  },
  {
    id: 5,
    title: 'What We Do in the Shadows',
    genre: '',
    year: 2003,
    rating: 8.87,
    poster: 'img/what-we-do-in-the-shadows.jpg',
    video: FILM_URL
  },
  {
    id: 6,
    title: 'Revenant',
    genre: '',
    year: 2022,
    rating: 8.87,
    poster: 'img/revenant.jpg',
    video: FILM_URL
  },
  {
    id: 7,
    title: 'Johnny English',
    genre: '',
    year: 2020,
    rating: 8.87,
    poster: 'img/johnny-english.jpg',
    video: FILM_URL
  },
  {
    id: 8,
    title: 'Shutter Island',
    genre: '',
    year: 2007,
    rating: 8.87,
    poster: 'img/shutter-island.jpg',
    video: FILM_URL
  }
];
