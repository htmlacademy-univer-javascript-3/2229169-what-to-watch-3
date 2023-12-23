import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PromoCard } from './mocks/main';
import { moviePreviews } from './mocks/movie-previews';
import { movies } from './mocks/movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoCard={PromoCard}
      moviePreviews={moviePreviews}
      movies={movies}
    />
  </React.StrictMode>
);
