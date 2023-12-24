import { RatingNumber, RatingText } from '../const';

export const getTextRepresentationRating = (rating: number) => {
  if (rating < RatingNumber.Bad) {
    return RatingText.Bad;
  } else if (rating < RatingNumber.Normal) {
    return RatingText.Normal;
  } else if (rating < RatingNumber.Good) {
    return RatingText.Good;
  } else if (rating < RatingNumber.VeryGood) {
    return RatingText.VeryGood;
  } else {
    return RatingText.Awesome;
  }
};
