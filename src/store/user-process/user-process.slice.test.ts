import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { userProcess } from './user-process.slice';
import { makeFakeUserInfo } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

describe('User-Process slice', () => {
  const initialState : UserProcess = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userInfo: undefined,
  };

  describe('no state changes', () => {
    const emptyAction = {type: ''};

    it('return initialState with empty action', () => {
      const expectedState = {...initialState};
      const result = userProcess.reducer(initialState, emptyAction);
      expect(result).toEqual(expectedState);
    });

    it('return initialState with empty action and undefind state', () => {
      const expectedState = {...initialState};
      const result = userProcess.reducer(undefined, emptyAction);
      expect(result).toEqual(expectedState);
    });
  });

  describe('checkAuthAction', () => {
    it('set "Auth" on "authorizationStatus" and payload on "userInfo" with "checkAuthAction.fulfilled" action', () => {
      const userInfo = makeFakeUserInfo();
      const expectedState = {...initialState, authorizationStatus: AuthorizationStatus.Auth, userInfo: userInfo};

      const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(userInfo, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('set "NoAuth" on "authorizationStatus" with "checkAuthAction.rejected" action', () => {
      const expectedState = {...initialState, authorizationStatus: AuthorizationStatus.NoAuth};
      const result = userProcess.reducer(initialState, checkAuthAction.rejected);
      expect(result).toEqual(expectedState);
    });
  });

  describe('loginAction', () => {
    it('set "Auth" on "authorizationStatus" and payload on "userInfo" with "loginAction.fulfilled" action', () => {
      const userInfo = makeFakeUserInfo();
      const expectedState = {...initialState, authorizationStatus: AuthorizationStatus.Auth, userInfo: userInfo};

      const result = userProcess.reducer(initialState, loginAction.fulfilled(userInfo, '', { login: '', password: '' }));

      expect(result).toEqual(expectedState);
    });

    it('set "NoAuth" on "authorizationStatus" with "loginAction.rejected" action', () => {
      const expectedState = {...initialState, authorizationStatus: AuthorizationStatus.NoAuth};
      const result = userProcess.reducer(initialState, loginAction.rejected);
      expect(result).toEqual(expectedState);
    });
  });

  describe('logoutAction', () => {
    it('set "NoAuth" on "authorizationStatus" and payload on "userInfo" with "logoutAction.fulfilled" action', () => {
      const userInfo = undefined;
      const expectedState = {...initialState, authorizationStatus: AuthorizationStatus.NoAuth, userInfo: userInfo};

      const result = userProcess.reducer(initialState, logoutAction.fulfilled(userInfo, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });
});
