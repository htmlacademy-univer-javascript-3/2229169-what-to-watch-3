import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type PriviteRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export default function PriviteRoute(props: PriviteRouteProps): JSX.Element{
  const {authStatus, children} = props;

  return(
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SingIn} />
  );
}

