import { wtwProcess, changeGenre } from './wtw-process.slice';
import { DEFAULT_GENRES } from '../../const';

describe('WTW-process slice', () => {
  const emptyAction = {type: ''};

  it('return initial state with empty action', () => {
    const expectedState = {genre: DEFAULT_GENRES};
    const result = wtwProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('return default initial state with empty action and undefined state', () => {
    const expectedState = {genre: DEFAULT_GENRES};
    const result = wtwProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('change genre with "changeGenre" action', () => {
    const initialState = {genre: DEFAULT_GENRES};
    const expectedGenre = 'Comedy';
    const result = wtwProcess.reducer(initialState, changeGenre('Comedy'));
    expect(result.genre).toBe(expectedGenre);
  });
});
