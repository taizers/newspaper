import './Banner.css';
import bannerimage1 from '../../img/bannerimage1.png';
import bannerimage2 from '../../img/bannerimage2.png';
import bannerimage3 from '../../img/bannerimage3.png';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../consts';


const Banner = () => {
  return (
      <section className="banner">
          <Link className ="banner__link" to = {pathLinks.home}>
            <img className="banner__image" src={bannerimage1} alt="bannerImage" height="550" width="720"/>
            <img className="banner__image" src={bannerimage2} alt="bannerImage" height="550" width="720"/>
            <img className="banner__image" src={bannerimage3} alt="bannerImage" height="550" width="720"/>
          </Link>
      </section>
  );
}

export default Banner;