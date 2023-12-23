import Footer from '../../components/footer/Footer';
import ListFilm from '../../components/list-film/list-film';
import { MoviePreview, PromoCard } from '../../types/movie-types';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import HeaderLogo from '../../components/header-logo/header-logo';

export type MainPageProps = {
  promoCard: PromoCard;
  moviePreviews: MoviePreview[];
}

export default function MainPage({promoCard, moviePreviews}: MainPageProps): JSX.Element{
  return(
    <div className="welcome-screen">
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
        <PromoFilmCard
          promoCard={promoCard}
          moviePreviews={moviePreviews}
        />
      </section>
      <div className="page-content">
        <ListFilm
          moviePreviews={moviePreviews} length={20}
        />
        <Footer/>
      </div>
    </div>
  );
}
