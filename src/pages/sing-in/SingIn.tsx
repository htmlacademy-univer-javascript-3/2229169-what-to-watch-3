import SingInForm from '../../components/sing-in-form/sing-in-form';
import Footer from '../../components/footer/Footer';
import HeaderLogo from '../../components/header-logo/header-logo';

export default function SingIn():JSX.Element{
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <SingInForm/>
      <Footer/>
    </div>
  );
}
