import './LastNews.css';
import LastNewsMainNew from './last-news-main-new/LastNewsMainNew';
import LastNewsList from './last-news-list/LastNewsList';
import useNewsStore from '../../../stores/newsStore'

const LastNews = () => {
  const lastNews = useNewsStore(store => store.getLastNews())
  const randomNewsIndex = Math.floor(Math.random() * (lastNews.length - 1))

  return (
    <section className="last-news">
      <div className="container">
        <h2 className="last-news__title">Последние новости</h2>
        <div className ="last-news__wrapper">
          <LastNewsList lastNews={lastNews} />
          <LastNewsMainNew lastMainNews={lastNews[randomNewsIndex]} />
        </div>
      </div>
    </section>
  );
};

export default LastNews;
