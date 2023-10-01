export const DataMovie = {
  promoMovie: 'img/the-grand-budapest-hotel-poster.jpg',
  nameMovie: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014
};

export enum AppRoute{
  Main = '/',
  SingIn = '/login',
  MyList = '/myList',
  Film = '/film:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
