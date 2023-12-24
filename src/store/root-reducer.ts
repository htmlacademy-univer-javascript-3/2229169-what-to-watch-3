import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { wtwData } from './wtw-data/wtw-data.slice';
import { wtwProcess } from './wtw-process/wtw-process.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: wtwData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Wtw]: wtwProcess.reducer,
});
