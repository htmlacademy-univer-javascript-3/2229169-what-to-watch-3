import { State } from '../../types/state';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationCheckedStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserInfo = (state: Pick<State, NameSpace.User>): UserData | undefined => state[NameSpace.User].userInfo;
