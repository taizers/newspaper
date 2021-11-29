import './LastNewsList.css';
import LastNewsItem from './last-news-item/LastNewsItem';

const LastNewsList = ({ lastNews }) => {
  return (
    <div className="last-news__list">
      <ul className="last-news__list-of-news list-of-news">
          {lastNews.map((item, index) => <LastNewsItem key={item.id} newsData={item} linkId={index} />)}
      </ul>
    </div>
  );
}

export default LastNewsList;
