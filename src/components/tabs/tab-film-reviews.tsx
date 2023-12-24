import { Review } from '..';
import { ReviewData } from '../../types/review';
import { FilmReviewsProps } from './tabs-props';
import { useMemo } from 'react';


const splitReviews = (reviews: ReviewData[]) => {
  const separator = Math.ceil(reviews.length / 2);
  const firstCol = reviews.slice(0, separator);
  const secondCol = reviews.slice(separator, reviews.length);

  return [firstCol, secondCol];
};

export default function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const [firstCol, secondCol] = useMemo(() => splitReviews(reviews),[reviews]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCol.map((review) => (
          <Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondCol.map((review) => (
          <Review key={review.id} date={review.date} user={review.user} comment={review.comment} rating={review.rating}/>
        ))}
      </div>
    </div>
  );
}
