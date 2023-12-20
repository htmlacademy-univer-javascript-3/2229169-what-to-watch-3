import { useState } from 'react';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/Video-player';
import { Link, generatePath } from 'react-router-dom';

type FilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  isMuted: boolean;
}

export default function SmallFillCard(props:FilmCardProps): JSX.Element{
  const [isActive, setIsActive] = useState(false);

  return(
    <article onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <VideoPlayer isMuted={props.isMuted} isActive={isActive} posterSrc={props.previewImage} videoSrc={props.previewVideoLink} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: props.id })}>{props.name}</Link>
      </h3>
    </article>
  );
}
