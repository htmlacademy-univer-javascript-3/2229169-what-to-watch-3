import { assert } from 'chai';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import * as browserHistory from '../../services/browser-history';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

describe('Redirect middleware', () => {
  let store: MockStore<State, AnyAction>;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    const history = browserHistory as { default?: { push: (path: string) => void } };
    if (history.default && typeof history.default.push === 'function') {
      history.default.push('');
    }
  });

  it('should redirect to "/login" with redirectToRoute action', () => {
    const history = browserHistory as { default?: { location?: { pathname: string } } };
    if (history.default && history.default.location && typeof history.default.location.pathname === 'string') {
      const redirectAction = redirectToRoute(AppRoute.SignIn);
      store.dispatch(redirectAction);
      assert.strictEqual(history.default.location.pathname, AppRoute.SignIn);
    }
  });

  it('does not redirect to "/main" page with empty action', () => {
    const history = browserHistory as { default?: { location?: { pathname: string } } };
    if (history.default && history.default.location && typeof history.default.location.pathname === 'string') {
      const emptyAction = { type: '', payload: AppRoute.Main };
      store.dispatch(emptyAction);
      assert.notStrictEqual(history.default.location.pathname, AppRoute.Main);
    }
  });
});
