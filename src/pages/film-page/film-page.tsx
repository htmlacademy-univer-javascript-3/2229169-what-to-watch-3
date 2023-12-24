import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import useFilmById from '../../hooks/film-by-id';
import useSimilarFilmsById from '../../hooks/similar-film-by-id';
import useReviewsById from '../../hooks/reviews-by-id';
import { AuthorizationStatus } from '../../const';
import { getFilmDataLoadingStatus } from '../../store/wtw-data/wtw-data.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import {
  Footer,
  Header,
  ListFilm,
  MyListButton,
  Spinner,
  Tabs
} from '../../components';

export default function FilmPage(): JSX.Element {
  const film = useFilmById();
  const similarFilms = useSimilarFilmsById();
  const reviews = useReviewsById();
  const navigate = useNavigate();
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div>
      {film && !isFilmDataLoading ?
        <>
          <Helmet>
            <title>Описание {film.name}</title>
          </Helmet>
          <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img
                  src={film.backgroundImage}
                  alt={film.name}
                />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <Header/>
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{film.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{film.genre}</span>
                    <span className="film-card__year">{film.released}</span>
                  </p>
                  <div className="film-card__buttons">
                    <button className="btn btn--play film-card__button" type="button" onClick={() => {
                      navigate(`/${AppRoute.Player}/${film.id}`);
                    }}
                    >
                      <svg viewBox="0 0 19 19" width={19} height={19}>
                        <use xlinkHref="#play-s" />
                      </svg>
                      <span>Play</span>
                    </button>
                    <MyListButton/>
                    {authorizationStatus === AuthorizationStatus.Auth ?
                      <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">
                        Add review
                      </Link> : ''}
                  </div>
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={film.posterImage}
                    alt={`${film.name} poster`}
                    width={218}
                    height={327}
                  />
                </div>
                <Tabs film={film} reviews={reviews}/>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <ListFilm filmCards={similarFilms} id={film.id} genre={film.genre}/>
            </section>
            <Footer/>
          </div>
        </> : <Spinner />}
    </div>
  );
}
