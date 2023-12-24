import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { AppRoute } from '../../const';
import useFilmById from '../../hooks/film-by-id';
import { useAppSelector } from '../../hooks/redux';
import { getFilmDataLoadingStatus } from '../../store/wtw-data/wtw-data.selectors';
import { getRunTime } from '../../utils/get-run-time';
import { getTimeLeft } from '../../utils/get-time-left';
import { Spinner } from '../../components';

export default function Player(): JSX.Element {
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const progressRef = useRef<HTMLProgressElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);
  const timeLeftRef = useRef<HTMLDivElement>(null);

  const handleVideoPlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlay(true);
    }
  };

  const handleVideoPauseClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };

  const handleVideoFullScreenClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen().then();
    }
  };

  const handleTimeUpdate = () => {
    if (
      progressRef.current &&
      videoRef.current &&
      film &&
      togglerRef.current &&
      timeLeftRef.current
    ) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressRef.current.value = progress;
      togglerRef.current.style.left = `${progress}%`;
      timeLeftRef.current.innerHTML = getTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  return (
    <div>
      {isFilmDataLoading
        ? <Spinner /> :
        <div className="player">
          <Helmet>
            <title>{film.name}</title>
          </Helmet>
          <video ref={videoRef} src={film.videoLink} className="player__video" poster={film.posterImage} onTimeUpdate={handleTimeUpdate}/>
          <button type="button" className="player__exit" onClick={() => navigate(`/${AppRoute.Film}/${film.id}`)}>
            Exit
          </button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={0} max={100} ref={progressRef}/>
                <div className="player__toggler" ref={togglerRef}>
                  Toggler
                </div>
              </div>
              <div className="player__time-value" ref={timeLeftRef}>{getRunTime(film.runTime)}</div>
            </div>
            <div className="player__controls-row">
              {isPlay ?
                <button type="button" className="player__play" onClick={handleVideoPauseClick}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button> :
                <button type="button" className="player__play" onClick={handleVideoPlayClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>}
              <div className="player__name">Transpotting</div>
              <button type="button" className="player__full-screen" onClick={handleVideoFullScreenClick}>
                <svg viewBox="0 0 27 27" width={27} height={27}>
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
}
