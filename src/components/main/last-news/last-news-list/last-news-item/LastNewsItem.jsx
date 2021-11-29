import './LastNewsItem.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../../consts';
import { generatePath } from 'react-router'

const LastNewsItem = ({ linkId, newsData }) => {
  const pathToNews = generatePath(pathLinks.newsPage, { id: linkId });

  return (
    <li>
      <Link className="list-of-news__item" to={pathToNews} >
        <img src={newsData.photo} alt={newsData.title}  className="list-of-news__image" height="130" width="160"/>
        <div className="list-of-news__text">{newsData.title}</div>
      </Link>
    </li>
  );
}

export default LastNewsItem;
