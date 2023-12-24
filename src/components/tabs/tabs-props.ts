import { Film } from '../../types/film';
import { ReviewData } from '../../types/review';

export type TabsProps = {
  film: Film;
  reviews: ReviewData[];
};

export type FilmDetailsProps = {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: string;
}

export type FilmOverviewProps = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
}

export type FilmReviewsProps = {
  reviews: ReviewData[];
}
