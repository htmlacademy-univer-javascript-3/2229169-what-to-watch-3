import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchSimilarFilmsAction } from '../store/api-action';
import { getSimilarFilms } from '../store/wtw-data/wtw-data.selectors';

export default function useSimilarFilmsById() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarFilmsAction({id: id}));
    }
  }, [dispatch, id]);

  const similarFilms = useAppSelector(getSimilarFilms);

  return similarFilms;
}
