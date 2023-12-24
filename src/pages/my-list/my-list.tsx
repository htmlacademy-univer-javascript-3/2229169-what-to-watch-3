import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/redux';
import { getFavoriteFilms } from '../../store/wtw-data/wtw-data.selectors';
import { Footer, Header, ListFilm } from '../../components';

export default function MyList(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <Helmet>
        <title>Мой список фильмов</title>
      </Helmet>
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListFilm filmCards={favoriteFilms} genre='All genres'/>
      </section>
      <Footer/>
    </div>
  );
}
