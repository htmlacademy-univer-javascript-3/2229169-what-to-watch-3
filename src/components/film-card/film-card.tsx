import { Link } from 'react-router-dom';
import { VideoPlayer } from '..';
import { FilmCardProps } from './film-card-props';
import { AppRoute } from '../../const';

export default function FilmCard({previewImage, previewVideoLink, isActiveVideo, name, id}: FilmCardProps): JSX.Element {
  return (
    <>
      <div className="small-film-card__image">
        {isActiveVideo
          ? <VideoPlayer previewVideoLink={previewVideoLink} previewImage={previewImage}/>
          : <img src={previewImage} alt={name} width={280} height={175}/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </>
  );
}
