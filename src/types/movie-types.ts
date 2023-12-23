export type MovieMain = {
  id: string;
  name: string;
  genre: string;
}

export type PromoCard = MovieMain & {
  date: number;
  img: string;
}

export type MoviePreview = MovieMain & {
  previewImage: string;
  previewVideoLink: string;
}

export type Movie = MovieMain & {
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  released: number;
  isFavorite: boolean;
};

export type Movies = Movie[];


