import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre-types';

export const changeGenre = createAction<Genre>('genre/changeGenre');
export const getMovies = createAction('movies/getMovies');
