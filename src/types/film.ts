export type Film = {
  id: string;
  name: string;
  genre: string;
  released: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink:string;
  previewVideoLink: string;
  description: string;
  runTime: number;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  isFavorite: boolean;
}
