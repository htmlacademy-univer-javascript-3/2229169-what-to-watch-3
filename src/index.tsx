import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { DataMovie } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App promoMovie={DataMovie.promoMovie} nameMovie={DataMovie.nameMovie} genre={DataMovie.genre} releaseDate={DataMovie.releaseDate}/>
  </React.StrictMode>
);
