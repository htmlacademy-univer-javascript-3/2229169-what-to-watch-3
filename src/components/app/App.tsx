import WelcomeScreen from '../welcome-screen/WelcomeScreen';

type AppScreenProps = {
  promoMovie: string;
  nameMovie: string;
  genre: string;
  releaseDate: number;
}

export default function App({promoMovie, nameMovie, genre, releaseDate}: AppScreenProps): JSX.Element{
  return(
    <WelcomeScreen promoMovie={promoMovie} nameMovie={nameMovie} genre={genre} releaseDate={releaseDate}/>
  );
}
