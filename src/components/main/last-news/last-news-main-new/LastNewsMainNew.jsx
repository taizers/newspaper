import './LastNewsMainNew.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../consts';
import { generatePath } from 'react-router';
import useNewsStore from '../../../../stores/newsStore';

const LastNewsMainNew = ({ lastMainNews }) => {
  const pathToNews = generatePath(pathLinks.newsPage, { id: lastMainNews.id });

  return (
    <div className="last-news__main-new main-news">
      <Link to={pathToNews} className="main-news__wrapper">
        <img className="main-news__image" src={lastMainNews.photo} alt={lastMainNews.title}  height="560" width="600"/>
        <div className="main-news__text">{lastMainNews.title}</div>
      </Link>
    </div>
  );
}

export default LastNewsMainNew;
