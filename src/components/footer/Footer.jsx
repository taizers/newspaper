import './Footer.css';
import bannerimage1 from '../../img/bannerimage1.png';
import bannerimage2 from '../../img/bannerimage2.png';
import bannerimage3 from '../../img/bannerimage3.png';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../consts';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <Link to={pathLinks.home} className="footer__logo logo"></Link>
            <ul ></ul>
        </div>
    </footer>
  );
}

export default Footer;