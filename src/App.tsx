import { AppRoute } from './const';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/private-route/private-route';
import {
  MainPage,
  MyList,
  NotFound,
  SingIn,
  FilmPage,
  AddReview,
  Player
} from './pages';
import { useAppSelector } from './hooks/redux';
import Spinner from './components/ui/spinner/spinner';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './services/browser-history';
import { getAuthorizationStatus } from './store/user-process/user-process.selectors';
import { getFilmsDataLoadingStatus, getPromoFilmDataLoadingStatus } from './store/wtw-data/wtw-data.selectors';


export default function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const isPromoFilmDataLoading = useAppSelector(getPromoFilmDataLoadingStatus);

  if (isFilmsDataLoading || isPromoFilmDataLoading) {
    return <Spinner/>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SingIn/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film}>
            <Route index element={<NotFound/>}/>
            <Route path=':id'>
              <Route index element={<FilmPage/>}/>
              <Route path={AppRoute.AddReview} element={<AddReview/>}/>
            </Route>
          </Route>
          <Route path={AppRoute.Player}>
            <Route index element={<NotFound/>}/>
            <Route path=':id' element={<Player/>}/>
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFound/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

