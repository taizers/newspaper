import './News.css';
import NewsItem from './news-item/NewsItem';
import useNewsStore from '../../../stores/newsStore'

const News = () => {
  const newsList = useNewsStore(store => store.news)

  return (
    <section className="news">
      <div className="container">
        <ul className="news__list">
          {newsList.map((item, index) => <NewsItem key={item.id} newsData={item} linkId={index} />)}
        </ul>
      </div>
    </section>
  );
};

export default News;
