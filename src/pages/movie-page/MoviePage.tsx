import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { MoviePreview, Movies } from '../../types/movie-types';
import ListFilm from '../../components/list-film/list-film';
import Footer from '../../components/footer/Footer';
import HeaderLogo from '../../components/header-logo/header-logo';

type MoviePageProps = {
  moviePreviews: MoviePreview[];
  movies: Movies;
}

export default function MoviePage(props: MoviePageProps): JSX.Element{
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = props.movies.find((m) => m.id === id);

  if (!movie) {
    return (<Navigate to='*' />);
  }

  let ratingText: string;

  if (movie.rating <= 5) {
    ratingText = 'Average';
  } else if (movie.rating > 5 && movie.rating <= 9) {
    ratingText = 'Very good';
  } else {
    ratingText = 'Excellent';
  }

  return(
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: movie.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <HeaderLogo/>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(`/player/${movie.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button"
                  onClick={() => navigate('/mylist')}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{movie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{ratingText}</span>
                  <span className="film-rating__count">{movie.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{movie.description}</p>

                <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {movie.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListFilm moviePreviews={props.moviePreviews} length={4} />
        </section>
        <Footer/>
      </div>
    </>
  );
}
