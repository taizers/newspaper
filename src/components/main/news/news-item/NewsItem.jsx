import './NewsItem.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../consts';
import { generatePath } from 'react-router';

const NewsItem = ({ linkId, newsData }) => {
  const pathToNews = generatePath(pathLinks.newsPage, { id: linkId });

  return (
    <li className="news__item">
      <Link to={pathToNews} >
        <img className="news__image" src={newsData.photo} alt={newsData.title} width="340" height="220" />
        <p className="news__text">{newsData.title}</p>
      </Link>
    </li>
  );
};

export default NewsItem;
