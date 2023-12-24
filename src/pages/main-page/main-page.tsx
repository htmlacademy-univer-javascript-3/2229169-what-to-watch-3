import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/redux';
import { Genre } from '../../types/genre';
import { getGenre } from '../../store/wtw-process/wtw-process.selectors';
import { getFilms } from '../../store/wtw-data/wtw-data.selectors';
import {
  Footer,
  GenreList,
  ListFilm,
  PromoFilmCard
} from '../../components';

export default function MainPage(): JSX.Element {
  const films = useAppSelector(getFilms);
  const genres: Genre[] = ['All genres', ...new Set(films.map((film) => film.genre))] as Genre[];
  const activeGenre = useAppSelector(getGenre);

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <PromoFilmCard/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <ListFilm filmCards={films} genre={activeGenre}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
