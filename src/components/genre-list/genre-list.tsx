import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Link } from 'react-router-dom';
import { Genre } from '../../types/genre';
import { changeGenre } from '../../store/wtw-process/wtw-process.slice';
import { getGenre } from '../../store/wtw-process/wtw-process.selectors';

type GenreListProps = {
  genres: Genre[];
}

export default function GenreList({genres}: GenreListProps): JSX.Element {
  const activeGenre = useAppSelector(getGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (newGenre: Genre) => {
    dispatch(changeGenre(newGenre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === activeGenre})}>
          <Link to="#" className="catalog__genres-link" onClick={() => handleGenreClick(genre)}>
            {genre}
          </Link>
        </li>
      ))}
    </ul>);
}
