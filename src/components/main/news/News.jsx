import './News.css';
import { connect } from 'react-redux';
import NewsItem from './news-item/NewsItem';

const News = (props) => {
    const { newsList } = props;
    return (
        <section className="news">
            <div className="container">
                <ul className="news__list">
                   { 
                        newsList.map(item => (
                            <NewsItem key = {item.id} newsData = {item}/>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        newsList : state.newsList
    });
};

export default connect(mapStateToProps)(News);