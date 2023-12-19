import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import SingIn from '../../pages/sing-in/SingIn';
import MyList from '../../pages/my-list/MyList';
import AddReview from '../../pages/add-review/AddReview';
import Player from '../../pages/player/Player';
import MoviePage from '../../pages/movie-page/MoviePage';
import NotFound from '../404-not-found/NotFound';
import PriviteRoute from '../privite-route/PriviteRoute';
import MainPage from '../../pages/main-page/MainPage';
import { FilmDescriptionType } from '../../types/types';
import { films } from '../../mocks/films';


export default function App({promoMovie, nameMovie, genre, releaseDate}: FilmDescriptionType): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              promoMovie={promoMovie}
              nameMovie={nameMovie}
              genre={genre}
              releaseDate={releaseDate}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.SingIn}
          element={<SingIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PriviteRoute
              authStatus={AuthStatus.NoAuth}
            >
              <MyList/>
            </PriviteRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
