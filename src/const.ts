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
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Nobember',
  'December',
];
