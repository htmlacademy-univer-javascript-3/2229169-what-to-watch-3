import { NameSpace } from '../../const';
import { AuthorizationStatus } from '../../const';
import {
  getUserInfo,
  getAuthorizationStatus
} from './user-process.selectors';

describe('User-Process selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
      userInfo: undefined,
    }
  };

  it('return userInfo from state', () => {
    const {userInfo} = state[NameSpace.User];
    const result = getUserInfo(state);
    expect(result).toBe(userInfo);
  });

  it('return authorizationStatus from state', () => {
    const {authorizationStatus} = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });
});
