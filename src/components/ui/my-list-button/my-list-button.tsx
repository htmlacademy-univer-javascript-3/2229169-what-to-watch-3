import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { getFavoriteFilms, getFilm } from '../../../store/wtw-data/wtw-data.selectors';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useNavigate } from 'react-router-dom';
import { changeFavoriteStatusAction } from '../../../store/api-action';
import { Film } from '../../../types/film';
import { useState } from 'react';

export default function MyListButton() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const film = useAppSelector(getFilm) as Film;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isFavorite, setFavorite] = useState(film?.isFavorite);

  const handleInListClick = () => {
    dispatch(changeFavoriteStatusAction({id: film.id, status: 0}));
    setFavorite(!isFavorite);
  };

  const handleAddListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(`/${AppRoute.SignIn}`);
    } else {
      dispatch(changeFavoriteStatusAction({id: film.id, status: 1}));
      setFavorite(!isFavorite);
    }
  };

  return (
    <div>
      {isFavorite && authorizationStatus === AuthorizationStatus.Auth ?
        <button className="btn btn--list film-card__button" type="button" onClick={handleInListClick}>
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list" />
          </svg>
          <span>My list</span>
          <span className="film-card__count">{favoriteFilms.length}</span>
        </button> :
        <button className="btn btn--list film-card__button" type="button" onClick={handleAddListClick}>
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
          <span>My list</span>
          <span className="film-card__count">{favoriteFilms.length}</span>
        </button>}
    </div>
  );
}
