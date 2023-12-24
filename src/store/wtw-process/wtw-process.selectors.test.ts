import { getGenre } from './wtw-process.selectors';
import { NameSpace } from '../../const';

describe('WTW-process selectors', () => {
  const state = {
    [NameSpace.Wtw]: {
      genre: 'Comedy'
    }
  };

  it('return genre from state', () => {
    const {genre} = state[NameSpace.Wtw];
    const result = getGenre(state);
    expect(result).toBe(genre);
  });
});
