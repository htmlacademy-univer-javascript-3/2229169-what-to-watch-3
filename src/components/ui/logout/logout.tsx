import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { logoutAction } from '../../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../../store/user-process/user-process.selectors';

export default function Logout(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const avatarUrl = useAppSelector(getUserInfo)?.avatarUrl;

  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={() => navigate(`/${AppRoute.MyList}`)}>
          <img
            src={avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item" onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      >
        <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

