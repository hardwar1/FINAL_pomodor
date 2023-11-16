import { Link } from 'react-router-dom';
import './logo.scss';

export function Logo() {
  return (
    <Link to={'/Tomato-timer/'} className="logo">
      <img className="logo__img" src="/src/assets/logo.png" alt="pomodoro box логотип" />
    </Link>
  );
}
