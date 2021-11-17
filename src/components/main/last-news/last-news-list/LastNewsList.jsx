import './LastNewsList.css';
import LastNewsItem from './last-news-item/LastNewsItem';

const LastNewsList = (props) => {
    const { lastNews } = props;
    return (
        <div className="last-news__list">
            <ul className="last-news__list-of-news list-of-news">
                {
                    lastNews.map(item => (
                        <LastNewsItem key = {item.id} newsData = {item}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default LastNewsList;