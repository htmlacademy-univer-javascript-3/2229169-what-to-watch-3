import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchReviewsAction } from '../store/api-action';
import { getReviews } from '../store/wtw-data/wtw-data.selectors';

export default function useReviewsById() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewsAction({id: id}));
    }
  }, [dispatch, id]);

  const reviews = useAppSelector(getReviews);

  return reviews;
}
