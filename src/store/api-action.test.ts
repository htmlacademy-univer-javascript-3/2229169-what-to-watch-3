import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import {
  AppThunkDispatch,
  extractActionsTypes,
  makeFakeFilm,
  makeFakePromoFilm,
  makeFakeReview,
  makeFakeUserInfo,
  makeFakeFilmId
} from '../utils/mocks';
import { State } from '../types/state';
import {
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchFavoriteFilmsAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction,
  addReviewAction,
  changeFavoriteStatusAction
} from './api-action';
import { APIRoute, NameSpace } from '../const';
import { redirectToRoute } from './action';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
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
      },
      [NameSpace.User]: {
        userInfo: undefined
      }
    });
  });

  describe('checkAuthAction', () => {
    it('dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(401);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmsAction', () => {
    it('dispatch "fetchFilmsAction.pending" and "fetchFilmsAction.fulfilled" when server response 200', async () => {
      const mockFilms = [makeFakeFilm()];
      mockAxiosAdapter.onGet(APIRoute.Films).reply(200, mockFilms);

      await store.dispatch(fetchFilmsAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchFilmsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchFilmsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.fulfilled.type
      ]);

      expect(fetchFilmsActionFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchFilmsAction.pending" and "fetchFilmsAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(APIRoute.Films).reply(404, []);

      await store.dispatch(fetchFilmsAction());
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.rejected.type
      ]);
    });
  });

  describe('fetchFilmAction', () => {
    it('dispatch "fetchFilmAction.pending" and "fetchFilmAction.fulfilled" when server response 200', async () => {
      const mockFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${mockFilm.id}`).reply(200, mockFilm);

      await store.dispatch(fetchFilmAction({id: mockFilm.id}));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchFilmActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchFilmAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmAction.pending.type,
        fetchFilmAction.fulfilled.type
      ]);

      expect(fetchFilmActionFulfilled.payload).toEqual(mockFilm);
    });

    it('dispatch "fetchFilmAction.pending", "redirectToRoute" and ""fetchFilmAction.fulfilled" when server response 404', async () => {
      const id = makeFakeFilmId();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}`).reply(404);

      await store.dispatch(fetchFilmAction({id: id}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchFilmAction.pending.type,
        redirectToRoute.type,
        fetchFilmAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchPromoFilmAction', () => {
    it('dispatch "fetchPromoFilmAction.pending" and "fetchPromoFilmAction.fulfilled" when server response 200', async () => {
      const mockPromoFilm = makeFakePromoFilm();
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, mockPromoFilm);

      await store.dispatch(fetchPromoFilmAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchPromoFilmActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchPromoFilmAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchPromoFilmAction.pending.type,
        fetchPromoFilmAction.fulfilled.type
      ]);

      expect(fetchPromoFilmActionFulfilled.payload).toEqual(mockPromoFilm);
    });

    it('dispatch "fetchPromoFilmAction.pending" and "fetchPromoFilmAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(404);

      await store.dispatch(fetchPromoFilmAction());
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchPromoFilmAction.pending.type,
        fetchPromoFilmAction.rejected.type
      ]);
    });
  });

  describe('fetchSimilarFilmsAction', () => {
    it('dispatch "fetchSimilarFilmsAction.pending" and "fetchSimilarFilmsAction.fulfilled" when server response 200', async () => {
      const mockSimilarFilms = [makeFakeFilm()];
      const id = makeFakeFilmId();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}/similar`).reply(200, mockSimilarFilms);

      await store.dispatch(fetchSimilarFilmsAction({id: id}));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchSimilarFilmsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchSimilarFilmsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.fulfilled.type
      ]);

      expect(fetchSimilarFilmsActionFulfilled.payload).toEqual(mockSimilarFilms);
    });

    it('dispatch "fetchSimilarFilmsAction.pending" and "fetchSimilarFilmsAction.rejected" when server response 404', async () => {
      const id = makeFakeFilmId();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}/similar`).reply(404);

      await store.dispatch(fetchSimilarFilmsAction({id: id}));
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.rejected.type
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" when server response 200', async () => {
      const mockReviews = [makeFakeReview()];
      const id = makeFakeFilmId();
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(200, mockReviews);

      await store.dispatch(fetchReviewsAction({id: id}));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchReviewsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);

      expect(fetchReviewsActionFulfilled.payload).toEqual(mockReviews);
    });

    it('dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.rejected" when server response 404', async () => {
      const id = makeFakeFilmId();
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(404);

      await store.dispatch(fetchReviewsAction({id: id}));
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type
      ]);
    });
  });

  describe('fetchFavoriteFilmsAction', () => {
    it('dispatch "fetchFavoriteFilmsAction.pending" and "fetchFavoriteFilmsAction.fulfilled" when server response 200', async () => {
      const mockFavoriteFilms = [makeFakeFilm()];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteFilms);

      await store.dispatch(fetchFavoriteFilmsAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const fetchFavoriteFilmsActionFulfilled = emmitedActions.at(1) as ReturnType<typeof fetchFavoriteFilmsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteFilmsAction.pending.type,
        fetchFavoriteFilmsAction.fulfilled.type
      ]);

      expect(fetchFavoriteFilmsActionFulfilled.payload).toEqual(mockFavoriteFilms);
    });

    it('dispatch "fetchFavoriteFilmsAction.pending" and "fetchFavoriteFilmsAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(404);

      await store.dispatch(fetchFavoriteFilmsAction());
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteFilmsAction.pending.type,
        fetchFavoriteFilmsAction.rejected.type
      ]);
    });
  });

  describe('addReviewAction', () => {
    const id = makeFakeFilmId();
    const review = {id: id, comment: '', rating: 0};

    it('dispatch "addReviewAction.pending","addReviewAction.fulfilled" and redirectToRoute when server response 201', async () => {
      const mockReview = makeFakeUserInfo();
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${id}`).reply(201, mockReview);

      await store.dispatch(addReviewAction(review));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);

      expect(extractedActionsTypes).toEqual([
        addReviewAction.pending.type,
        redirectToRoute.type,
        addReviewAction.fulfilled.type
      ]);
    });

    it('dispatch "addReviewAction.pending" and "addReviewAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${id}`).reply(400);

      await store.dispatch(addReviewAction(review));
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        addReviewAction.pending.type,
        addReviewAction.rejected.type
      ]);
    });
  });

  describe('changeFavoriteStatusAction', () => {
    const id = makeFakeFilmId();
    const status = {id: id, status: 0};

    it('dispatch "changeFavoriteStatusAction.pending","addReviewAction.fulfilled" and "fetchFavoriteFilms.pending" when server response 200', async () => {
      const mockFavoriteFilm = makeFakeFilm();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${id}/${status.status}`).reply(200, mockFavoriteFilm);

      await store.dispatch(changeFavoriteStatusAction(status));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatusAction.pending.type,
        fetchFavoriteFilmsAction.pending.type,
        changeFavoriteStatusAction.fulfilled.type
      ]);
    });

    it('dispatch "changeFavoriteStatusAction.pending" and "addReviewAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${id}/${status.status}`).reply(400);

      await store.dispatch(changeFavoriteStatusAction(status));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.rejected.type
      ]);
    });
  });

  describe('loginAction', () => {
    const userData = {login: '', password: ''};
    it('dispatch "loginAction.pending","loginAction.fulfilled" and redirectToRoute when server response 200', async () => {
      const userInfo = makeFakeUserInfo();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, userInfo);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(userData));
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);
      const loginActionFulfilled = emmitedActions.at(3) as ReturnType<typeof loginAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loginAction.pending.type,
        fetchFavoriteFilmsAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type
      ]);

      expect(loginActionFulfilled.payload).toEqual(userInfo);
      expect(mockSaveToken).toBeCalledTimes(1);
    });

    it('dispatch "loginAction.pending" and "loginAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(loginAction(userData));
      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type
      ]);
    });
  });

  describe('logoutAction', () => {
    it('dispatch "logoutAction.pending","logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const emmitedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emmitedActions);

      expect(extractedActionsTypes).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type
      ]);
    });
  });
});
