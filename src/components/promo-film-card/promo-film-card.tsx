import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPromoFilm } from '../../store/wtw-data/wtw-data.selectors';
import { Film } from '../../types/film';
import { fetchFilmAction } from '../../store/api-action';
import { useEffect } from 'react';
import { Header, MyListButton } from '..';

export default function PromoFilmCard(): JSX.Element{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const promoFilm = useAppSelector(getPromoFilm) as Film;

  useEffect(() => {
    dispatch(fetchFilmAction({id: promoFilm.id}));
  });

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={promoFilm.backgroundImage}
          alt={promoFilm.name}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promoFilm.posterImage}
              alt={`${promoFilm.name} poster`}
              width={218}
              height={327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={() => {
                navigate(`/${AppRoute.Player}/${promoFilm.id}`);
              }}
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <MyListButton/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
