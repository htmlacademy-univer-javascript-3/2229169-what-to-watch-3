import { name, random, finance, image, internet, commerce, datatype } from 'faker';
import { Film } from '../types/film';
import { PromoFilm } from '../types/promo-film';
import { ReviewData } from '../types/review';
import { UserData } from '../types/user-data';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createApi } from '../services/api';
import { State } from '../types/state';

export const makeFakeFilm = (): Film => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  previewVideoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: String(finance.amount(1, 100, 0)),
  isFavorite: false,
});

export const makeFakePromoFilm = (): PromoFilm => (
  {
    id: random.alpha({count: 10}),
    name: name.title(),
    posterImage: image.imageUrl(),
    backgroundImage: '#ffffff',
    videoLink: internet.url(),
    genre: random.word(),
    released: String(finance.amount(1, 100, 0)),
    isFavorite: false,
  }
);

export const makeFakeReview = (): ReviewData => ({
  id: random.alpha({count: 10}),
  date: String(datatype.datetime()),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

export const makeFakeUserInfo = (): UserData => ({
  name: name.firstName(),
  avatarUrl: internet.url(),
  email: internet.email(),
  token: 'Z3VzeWFAbWFpbC5ydQ=='
});

export const makeFakeFilmId = (): string => random.alpha({count: 10});

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
