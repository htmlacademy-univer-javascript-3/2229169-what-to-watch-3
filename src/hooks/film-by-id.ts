import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchFilmAction } from '../store/api-action';
import { Film } from '../types/film';
import { getFilm } from '../store/wtw-data/wtw-data.selectors';

export default function useFilmById() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction({id: id}));
    }
  }, [dispatch, id]);

  const film = useAppSelector(getFilm) as Film;


  return film;
}
