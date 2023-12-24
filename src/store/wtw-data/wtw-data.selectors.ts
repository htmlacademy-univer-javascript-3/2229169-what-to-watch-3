import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { ReviewData } from '../../types/review';
import { PromoFilm } from '../../types/promo-film';

export const getFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getFilm = (state: Pick<State, NameSpace.Data>): Film | undefined => state[NameSpace.Data].film;
export const getFilmDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isFilmDataLoading;
export const getSimilarFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].similarFilms;
export const getReviews = (state: Pick<State, NameSpace.Data>): ReviewData[] => state[NameSpace.Data].reviews;
export const getPromoFilm = (state: Pick<State, NameSpace.Data>): PromoFilm | undefined => state[NameSpace.Data].promoFilm;
export const getPromoFilmDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isPromoFilmDataLoading;
export const getFavoriteFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].favoriteFilms;
