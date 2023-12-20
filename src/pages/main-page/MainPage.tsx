import FilmCard from '../../components/film-card/FilmCard';
import Footer from '../../components/footer/Footer';
import ListFilm from '../../components/list-film/ListFilm';
import { MoviePreview } from '../../types/types';

export type MainPageProps = {
  name: string;
  id: number;
  genre: string;
  date: number;
  img: string;
  moviePreviews: MoviePreview[];
}

export default function MainPage(props: MainPageProps): JSX.Element{
  return(
    <div className="welcome-screen">
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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
        <FilmCard
          id={props.id}
          name={props.name}
          genre={props.genre}
          date={props.date}
          img={props.img}
          moviePreviews={props.moviePreviews}
        />
      </section>

      <div className="page-content">
        <ListFilm
          moviePreviews={props.moviePreviews} length={20}
        />
        <Footer/>
      </div>
    </div>
  );
}
