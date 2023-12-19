export type FilmDescriptionType ={
  promoMovie: string;
  nameMovie: string;
  genre: string;
  releaseDate: number;
  films: Film[];
}

export type Film ={
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
  video: string;
}


