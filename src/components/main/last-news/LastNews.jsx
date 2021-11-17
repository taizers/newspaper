import './LastNews.css';
import LastNewsMainNew from './last-news-main-new/LastNewsMainNew';
import LastNewsList from './last-news-list/LastNewsList';
import { connect } from 'react-redux';

const LastNews = (props) => {
    const { lastNews} = props;
  return (
        <section className="last-news">
            <div className="container">
                <h2 className="last-news__title">Последние новости</h2>
                <div className ="last-news__wrapper">
                    <LastNewsList lastNews = {lastNews} />
                    <LastNewsMainNew lastMainNews = {lastNews[0]} />
                </div>
            </div>
        </section>
  );
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        lastNews : state.lastNews, 
    });
};

export default connect(mapStateToProps)(LastNews);