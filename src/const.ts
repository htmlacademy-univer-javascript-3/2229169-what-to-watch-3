export const SECOND_COUNT_IN_HOUR = 3600;
export const SECOND_COUNT_IN_MINUTE = 60;
export const DEFAULT_FILMS_COUNT = 8;

export enum RatingText {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingNumber {
  Bad = 3,
  Normal = 5,
  Good = 8,
  VeryGood = 10,
}

export enum AppRoute {
  Main = '/',
  SignIn = 'login',
  MyList = 'mylist',
  Film = 'films',
  AddReview = 'review',
  Player = 'player',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Similar = '/similar',
  Favorite ='/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Wtw = 'WTW'
}

export const DEFAULT_GENRES = 'All genres';
