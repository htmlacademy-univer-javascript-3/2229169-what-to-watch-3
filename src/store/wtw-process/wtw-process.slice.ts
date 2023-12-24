import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_GENRES, NameSpace } from '../../const';
import { Genre } from '../../types/genre';
import { WtwProcess } from '../../types/state';

const initialState: WtwProcess = {
  genre: DEFAULT_GENRES
};

export const wtwProcess = createSlice({
  name: NameSpace.Wtw,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    }
  },
});

export const {changeGenre} = wtwProcess.actions;
