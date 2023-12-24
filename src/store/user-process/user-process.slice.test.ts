import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { userProcess } from './user-process.slice';
import { makeFakeUserInfo } from '../../utils/mocks';
import { loginAction } from '../api-action';

describe('loginAction', () => {
  const initialState: UserProcess = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userInfo: undefined,
  };

  it('should set "Auth" on "authorizationStatus" and payload on "userInfo" with "loginAction.fulfilled" action', () => {
    const userInfo = makeFakeUserInfo(); // Генерация фейковых данных пользователя

    const expectedState: UserProcess = {
      authorizationStatus: AuthorizationStatus.Auth,
      userInfo,
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(userInfo, '', { login: '', password: '' }));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" on "authorizationStatus" with "loginAction.rejected" action', () => {
    const expectedState: UserProcess = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userInfo: undefined,
    };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
