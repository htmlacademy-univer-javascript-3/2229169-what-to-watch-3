import { getTextRepresentationRating } from './get-text-representation-rating';

describe('Get a text representation of the film rating', () => {
  it('return value "Bad" when rating < 3', () => {
    const rating = 2.8;
    const expectedTextRating = 'Bad';

    const result = getTextRepresentationRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return value "Normal" when rating < 5 and >= 3', () => {
    const rating = 3;
    const expectedTextRating = 'Normal';

    const result = getTextRepresentationRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return value "Good" when rating < 8 and >= 5', () => {
    const rating = 5.7;
    const expectedTextRating = 'Good';

    const result = getTextRepresentationRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return value "Very good" when rating < 10 and >= 8', () => {
    const rating = 9.8;
    const expectedTextRating = 'Very good';

    const result = getTextRepresentationRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return value "Awesome" when rating = 10', () => {
    const rating = 10;
    const expectedTextRating = 'Awesome';

    const result = getTextRepresentationRating(rating);

    expect(result).toBe(expectedTextRating);
  });
});
