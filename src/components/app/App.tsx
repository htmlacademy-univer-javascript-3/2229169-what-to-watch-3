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
import { MoviePreview, Movies } from '../../types/types';

type AppProps = {
  main: {
    name: string;
    genre: string;
    date: number;
    id: number;
    img: string;
  };
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
              id={props.main.id}
              moviePreviews={props.moviePreviews}
              name={props.main.name}
              genre={props.main.genre}
              date={props.main.date}
              img={props.main.img}
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
