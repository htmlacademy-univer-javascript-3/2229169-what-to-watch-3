import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_GENRES, DEFAULT_FILMS_COUNT } from '../../const';
import { FilmCard, ShowMoreButton } from '..';
import { FilmCardProps } from '../film-card/film-card-props';


type FilmsListProps = {
  filmCards: FilmCardProps[];
  id?: string;
  genre?: string;
}

export default function ListFilm({filmCards, id, genre}: FilmsListProps): JSX.Element {
  const [idActiveFilm, setIdActiveFilm] = useState('');
  const [idActiveVideo, setIdActiveVideo] = useState('');
  const [countShownFilms, setCountShownFilm] = useState(DEFAULT_FILMS_COUNT);

  const navigate = useNavigate();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const relevantFilms = genre !== DEFAULT_GENRES
    ? filmCards.filter((film) => film.id !== id && film.genre === genre)
    : filmCards;

  const handleFilmMouseOver = (filmId: string) => {
    setIdActiveFilm(filmId);
    timeoutRef.current = setTimeout(() => {
      setIdActiveVideo(filmId);
    }, 1000);
  };

  const handleFilmMouseLeave = () => {
    setIdActiveFilm('');
    setIdActiveVideo('');
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
  };

  const handleShownMoreClick = () => {
    setCountShownFilm((prev) => prev + DEFAULT_FILMS_COUNT);
  };

  return (
    <>
      <div className="catalog__films-list">
        {relevantFilms
          .slice(0, countShownFilms)
          .map((filmCard: FilmCardProps) => (
            <article className="small-film-card catalog__films-card"
              key={filmCard.id}
              onMouseOver={() => handleFilmMouseOver(filmCard.id)}
              onMouseLeave={handleFilmMouseLeave}
              onClick={() => navigate(`/${AppRoute.Film}/${idActiveFilm}`)}
            >
              <FilmCard
                id={filmCard.id}
                previewImage={filmCard.previewImage}
                previewVideoLink={filmCard.previewVideoLink}
                name={filmCard.name}
                isActiveVideo={idActiveVideo === filmCard.id}
              />
            </article>
          ))}
      </div>
      {countShownFilms >= relevantFilms.length
        ? ''
        : <div className="catalog__more" onClick={() => handleShownMoreClick()}><ShowMoreButton/></div>}
    </>
  );
}
