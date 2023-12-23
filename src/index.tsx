import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PromoCard } from './mocks/main';
import { moviePreviews } from './mocks/movie-previews';
import { movies } from './mocks/movies';
import { store } from './store/store';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App
          promoCard={PromoCard}
          moviePreviews={moviePreviews}
          movies={movies}
        />
      </React.StrictMode>
    </Provider>
  </HelmetProvider>
);
