export type ReviewMain = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: string;
};

export type Review = {
  id: string;
  reviews: ReviewMain[];
};

export type Reviews = Review[];
