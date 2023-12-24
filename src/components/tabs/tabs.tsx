import cn from 'classnames';
import FilmOverview from './tab-film-overview';
import FilmDetails from './tab-film-details';
import FilmReviews from './tab-film-reviews';
import { useEffect, useState } from 'react';
import { TabsProps } from './tabs-props';

export default function Tabs({film, reviews}: TabsProps): JSX.Element{
  const [activeTab, setActiveTab] = useState(
    <FilmOverview
      rating={film.rating}
      scoresCount={film.scoresCount}
      description={film.description}
      director={film.director}
      starring={film.starring}
    />);
  const [disabledLink, setDisabledLink] = useState('Overview');

  useEffect(() => {
    setActiveTab(
      <FilmOverview
        rating={film.rating}
        scoresCount={film.scoresCount}
        description={film.description}
        director={film.director}
        starring={film.starring}
      />);
    setDisabledLink('Overview');
  }, [film.rating, film.scoresCount, film.description, film.director, film.starring]);

  const handleOverviewLinkClick = () => {
    setActiveTab(
      <FilmOverview
        rating={film.rating}
        scoresCount={film.scoresCount}
        description={film.description}
        director={film.director}
        starring={film.starring}
      />);
    setDisabledLink('Overview');
  };

  const handleDetailsLinkClick = () => {
    setActiveTab(
      <FilmDetails
        director={film.director}
        starring={film.starring}
        runTime={film.runTime}
        genre={film.genre}
        released={film.released}
      />
    );
    setDisabledLink('Details');
  };

  const handleReviewsLinkClick = () => {
    setActiveTab(
      <FilmReviews
        reviews={reviews}
      />
    );
    setDisabledLink('Reviews');
  };

  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Overview'})}>
            <a className="film-nav__link" onClick={handleOverviewLinkClick}>
                    Overview
            </a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Details'})}>
            <a className="film-nav__link" onClick={handleDetailsLinkClick}>
                    Details
            </a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Reviews'})}>
            <a className="film-nav__link" onClick={handleReviewsLinkClick}>
                    Reviews
            </a>
          </li>
        </ul>
      </nav>
      {activeTab}
    </div>
  );
}

