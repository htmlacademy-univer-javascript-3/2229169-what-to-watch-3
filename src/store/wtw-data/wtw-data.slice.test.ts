import { wtwData } from './wtw-data.slice';
import { WtwData } from '../../types/state';
import { makeFakeFilm, makeFakePromoFilm, makeFakeReview } from '../../utils/mocks';
import {
  fetchFilmsAction,
  fetchFilmAction,
  fetchFavoriteFilmsAction,
  fetchPromoFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction
} from '../api-action';

describe('WTW-Data slice', () => {
  const initialState : WtwData = {
    films: [],
    favoriteFilms: [],
    isFilmsDataLoading: false,
    isPromoFilmDataLoading: false,
    isFilmDataLoading: false,
    film: undefined,
    similarFilms: [],
    reviews: [],
    promoFilm: undefined,
  };

  describe('no state changes', () => {
    const emptyAction = {type: ''};

    it('return initialState with empty action', () => {
      const expectedState = {...initialState};
      const result = wtwData.reducer(initialState, emptyAction);
      expect(result).toEqual(expectedState);
    });

    it('return initialState with empty action and undefind state', () => {
      const expectedState = {...initialState};
      const result = wtwData.reducer(undefined, emptyAction);
      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilmsAction', () => {
    it('set "true" on "isFilmsDataLoading" with "fetchFilmsAction" action', () => {
      const expectedState = {...initialState, isFilmsDataLoading: true};
      const result = wtwData.reducer(initialState, fetchFilmsAction.pending);
      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isFilmsDataLoading" and payload on "films" with "fetchFilmsAction.fulfilled" action', () => {
      const films = [makeFakeFilm()];
      const expectedState = {...initialState, isFilmsDataLoading: false, films: films};

      const result = wtwData.reducer(
        initialState,
        fetchFilmsAction.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilmAction', () => {
    it('set "true" on "isFilmDataLoading" with "fetchFilmAction" action', () => {
      const expectedState = {...initialState, isFilmDataLoading: true};
      const result = wtwData.reducer(initialState, fetchFilmAction.pending);
      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isFilmDataLoading" and payload on "film" with "fetchFilmAction.fulfilled" action', () => {
      const film = makeFakeFilm();
      const expectedState = {...initialState, isFilmDataLoading: false, film: film};

      const result = wtwData.reducer(
        initialState,
        fetchFilmAction.fulfilled(film, '', {id: ''}));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchPromoFilmAction', () => {
    it('set "true" on "isPromoFilmDataLoading" with "fetchPromoFilmAction" action', () => {
      const expectedState = {...initialState, isPromoFilmDataLoading: true};
      const result = wtwData.reducer(initialState, fetchPromoFilmAction.pending);
      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isPromoFilmDataLoading" and payload on "promoFilm" with "fetchPromoFilmAction.fulfilled" action', () => {
      const promoFilm = makeFakePromoFilm();
      const expectedState = {...initialState, isPromoFilmDataLoading: false, promoFilm: promoFilm};

      const result = wtwData.reducer(
        initialState,
        fetchPromoFilmAction.fulfilled(promoFilm, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchSimilarFilmsAction', () => {
    it('set payload on "similarFilms" with "fetchSimilarFilmsAction.fulfilled" action', () => {
      const similarFilms = [makeFakeFilm()];
      const expectedState = {...initialState, similarFilms: similarFilms};

      const result = wtwData.reducer(
        initialState,
        fetchSimilarFilmsAction.fulfilled(similarFilms, '', {id: ''}));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchReviewsAction', () => {
    it('set payload on "reviews" with "fetchReviewsAction.fulfilled" action', () => {
      const reviews = [makeFakeReview()];
      const expectedState = {...initialState, reviews: reviews};

      const result = wtwData.reducer(
        initialState,
        fetchReviewsAction.fulfilled(reviews, '', {id: ''}));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFavoriteFilmsAction', () => {
    it('set payload on "favoriteFilms" with "fetchFavoriteFilmsAction.fulfilled" action', () => {
      const favoriteFilms = [makeFakeFilm()];
      const expectedState = {...initialState, favoriteFilms: favoriteFilms};

      const result = wtwData.reducer(
        initialState,
        fetchFavoriteFilmsAction.fulfilled(favoriteFilms, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });
});
