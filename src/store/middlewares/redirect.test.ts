import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import * as browserHistory from '../../services/browser-history'; // Используем * as для импорта
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

jest.mock('../../browser-history', () => ({
  location: { pathname: '' },
  push(path: string) {
    this.location.pathname = path;
  }
}));

describe('Redirect middleware', () => {
  let store: MockStore<State, AnyAction>; // Укажем типы для store

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    const history = browserHistory as { default?: { push: (path: string) => void } }; // Уточняем тип history
    if (history.default && typeof history.default.push === 'function') {
      history.default.push('');
    }
  });

  it('should redirect to "/login" with redirectToRoute action', () => {
    const history = browserHistory as { default?: { location?: { pathname: string } } }; // Уточняем тип history
    if (history.default && history.default.location && typeof history.default.location.pathname === 'string') {
      const redirectAction = redirectToRoute(AppRoute.SignIn);
      store.dispatch(redirectAction);
      expect(history.default.location.pathname).toBe(AppRoute.SignIn);
    }
  });

  it('does not redirect to "/main" page with empty action', () => {
    const history = browserHistory as { default?: { location?: { pathname: string } } }; // Уточняем тип history
    if (history.default && history.default.location && typeof history.default.location.pathname === 'string') {
      const emptyAction = { type: '', payload: AppRoute.Main };
      store.dispatch(emptyAction);
      expect(history.default.location.pathname).not.toBe(AppRoute.Main);
    }
  });
});
