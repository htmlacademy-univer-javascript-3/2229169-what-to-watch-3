import { Route, BrowserRouter, Routes } from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/WelcomeScreen';
import { AppRoute, AuthorizationStatus } from '../../const';
import SingIn from '../../pages/sing-in/SingIn';
import MyList from '../../pages/my-list/MyList';
import AddReview from '../../pages/add-review/AddReview';
import Player from '../../pages/player/Player';
import MoviePage from '../../pages/movie-page/MoviePage';
import NotFound from '../404-not-found/NotFound';
import PriviteRoute from '../privite-route/PriviteRoute';

type AppScreenProps = {
  promoMovie: string;
  nameMovie: string;
  genre: string;
  releaseDate: number;
}

export default function App({promoMovie, nameMovie, genre, releaseDate}: AppScreenProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen promoMovie={promoMovie} nameMovie={nameMovie} genre={genre} releaseDate={releaseDate}/>}
        />
        <Route
          path={AppRoute.SingIn}
          element={<SingIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PriviteRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
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
