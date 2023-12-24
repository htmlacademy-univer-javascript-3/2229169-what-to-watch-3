import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { ReviewData } from './review';
import { UserData } from './user-data';
import { Genre } from './genre';
import { PromoFilm } from './promo-film';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | undefined;
}

export type WtwData = {
  films: Film[];
  favoriteFilms: Film[];
  isFilmsDataLoading: boolean;
  isPromoFilmDataLoading: boolean;
  isFilmDataLoading: boolean;
  film: Film | undefined;
  similarFilms: Film[];
  reviews: ReviewData[];
  promoFilm: PromoFilm | undefined;
}

export type WtwProcess = {
  genre: Genre;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
