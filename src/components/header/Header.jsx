import './Header.css';
import { pathLinks } from '../../consts';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="header">
            <div className="container header__container">
                <Link to = {pathLinks.home} className="header__logo logo">
                    SportNews
                </Link>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li><Link to={pathLinks.home}>Футбол</Link></li>
                        <li><Link to={pathLinks.home}>Хоккей</Link></li>
                        <li><Link to={pathLinks.home}>Лыжные гонки</Link></li>
                        <li><Link to={pathLinks.home}>Баскетбол</Link></li>
                    </ul>
                </nav>
                <Link to={pathLinks.login} className="header__sign-in">
                    Вход
                </Link>
            </div>
      </header>
  );
}

export default Header;
