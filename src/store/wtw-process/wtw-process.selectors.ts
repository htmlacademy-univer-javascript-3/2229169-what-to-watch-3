import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Genre } from '../../types/genre';

export const getGenre = (state: Pick<State, NameSpace.Wtw>): Genre => state[NameSpace.Wtw].genre;
