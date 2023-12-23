import { MoviePreview } from '../../types/movie-types';
import FillCard from '../film-card/FilmCard';
import ShowMoreButton from '../show-more-btn/show-more-btn';

type ListFilmProps = {
  length: number;
  moviePreviews: MoviePreview[];
}

export default function ListFilm(props:ListFilmProps): JSX.Element{
  const movies = props.moviePreviews.slice(0, props.length);

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        {movies.map(({ id, name, previewImage, previewVideoLink }) => (
          <FillCard
            key={id}
            previewVideoLink={previewVideoLink}
            id={id}
            isMuted
            name={name}
            previewImage={previewImage}
          />))}
      </div>
      <ShowMoreButton/>
    </section>
  );
}
