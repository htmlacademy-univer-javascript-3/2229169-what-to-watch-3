import { Helmet } from 'react-helmet-async';
import { Footer, Logo, SingInForm } from '../../components';

export default function SignIn(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <SingInForm/>
      </div>
      <Footer/>
    </div>
  );
}
