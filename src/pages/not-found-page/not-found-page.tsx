import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <Link className='back-main' to="/">Вернуться на главную страницу</Link>
    </>
  );
}
