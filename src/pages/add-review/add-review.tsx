import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import { Logo, Logout, ReviewsForm } from '../../components';
import { getFilm } from '../../store/wtw-data/wtw-data.selectors';


export default function AddReview(): JSX.Element {
  const film = useAppSelector(getFilm) as Film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
      <Helmet>
        <title>Оценка {film.name}</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/${AppRoute.Film}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <Logout/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={`${film.name }poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewsForm id={film.id}/>
      </div>
    </section>
  );
}
