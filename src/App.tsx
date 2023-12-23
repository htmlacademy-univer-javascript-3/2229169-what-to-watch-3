import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from './const';
import {
  SingIn,
  MainPage,
  MyList,
  MoviePage,
  AddReview,
  Player,
  NotFound,
} from './pages';
import { MoviePreview, Movies, PromoCard } from './types/movie-types';
import PriviteRoute from './components/privite-route/privite-route';

type AppProps = {
  promoCard: PromoCard;
  moviePreviews: MoviePreview[];
  movies: Movies;
}

export default function App(props: AppProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              promoCard={props.promoCard}
              moviePreviews={props.moviePreviews}
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
          element={
            <MoviePage
              movies={props.movies}
              moviePreviews={props.moviePreviews}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.Player}
          element={
            <Player
              movies={props.movies}
            />
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
