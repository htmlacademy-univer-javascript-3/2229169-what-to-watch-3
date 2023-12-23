import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element{
  return(
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link className='back-main' to="/">Вернуться на главную страницу</Link>
    </div>
  );
}
