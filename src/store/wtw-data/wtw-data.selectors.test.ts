import { NameSpace } from '../../const';
import {
  getFilms,
  getFilm,
  getSimilarFilms,
  getReviews,
  getFavoriteFilms,
  getPromoFilm,
  getFilmsDataLoadingStatus,
  getFilmDataLoadingStatus,
  getPromoFilmDataLoadingStatus
} from './wtw-data.selectors';

describe('WTW-Data selectors', () => {
  const state = {
    [NameSpace.Data]: {
      films: [],
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isPromoFilmDataLoading: false,
      isFilmDataLoading: false,
      film: undefined,
      similarFilms: [],
      reviews: [],
      promoFilm: undefined,
    }
  };

  describe('Films', () => {
    it('return films from state', () => {
      const {films} = state[NameSpace.Data];
      const result = getFilms(state);
      expect(result).toBe(films);
    });

    it('return isFilmsDataLoading from state', () => {
      const {isFilmsDataLoading} = state[NameSpace.Data];
      const result = getFilmsDataLoadingStatus(state);
      expect(result).toBe(isFilmsDataLoading);
    });
  });

  describe('Film', () => {
    it('return film from state', () => {
      const {film} = state[NameSpace.Data];
      const result = getFilm(state);
      expect(result).toBe(film);
    });

    it('return isFilmDataLoading from state', () => {
      const {isFilmDataLoading} = state[NameSpace.Data];
      const result = getFilmDataLoadingStatus(state);
      expect(result).toBe(isFilmDataLoading);
    });
  });

  describe('PromoFilm', () => {
    it('return promoFilm from state', () => {
      const {promoFilm} = state[NameSpace.Data];
      const result = getPromoFilm(state);
      expect(result).toBe(promoFilm);
    });

    it('return isPromoFilmDataLoading from state', () => {
      const {isPromoFilmDataLoading} = state[NameSpace.Data];
      const result = getPromoFilmDataLoadingStatus(state);
      expect(result).toBe(isPromoFilmDataLoading);
    });
  });

  describe('FavoriteFilms', () => {
    it('return favoriteFilms from state', () => {
      const {favoriteFilms} = state[NameSpace.Data];
      const result = getFavoriteFilms(state);
      expect(result).toBe(favoriteFilms);
    });
  });

  describe('SimilarFilms', () => {
    it('return similarFilms from state', () => {
      const {similarFilms} = state[NameSpace.Data];
      const result = getSimilarFilms(state);
      expect(result).toBe(similarFilms);
    });
  });

  describe('Reviews', () => {
    it('return reviews from state', () => {
      const {reviews} = state[NameSpace.Data];
      const result = getReviews(state);
      expect(result).toBe(reviews);
    });
  });
});
