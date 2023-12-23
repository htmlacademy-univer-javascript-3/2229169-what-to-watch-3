import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, getMovies } from './action';
import { Movies } from '../types/movie-types';
import { Genre } from '../types/genre-types';
import { DEFAULT_GENRES } from '../const';
import { movies } from '../mocks/movies';

const initialState: {genre: Genre; movies: Movies} = {
  genre: DEFAULT_GENRES,
  movies: movies,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getMovies, (state) => {
      state.movies = movies;
    });
});
