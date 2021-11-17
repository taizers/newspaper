import './LastNewsItem.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../../consts';
import { generatePath } from 'react-router'
import { connect } from 'react-redux'; 
import { ActionCreators } from '../../../../../reducer';

const LastNewsItem = (props) => {
    const { newsData, changeActivNews } = props;
    const pathToNews = generatePath(pathLinks.newsPage, { id: newsData.id });

    const onClick = () =>{
        changeActivNews(newsData);
    };

    return (
            <li>
                <Link className="list-of-news__item" to={pathToNews} onClick={onClick}>
                    <img src={newsData.photo} alt={newsData.title}  className="list-of-news__image" height="130" width="160"/>
                    <div className="list-of-news__text"> {newsData.title} </div>
                </Link>
            </li>
    );
}
const mapDispathToProps = (dispath) => {
    return { 
        changeActivNews: (newsData) => dispath(ActionCreators["CHANGE_ACTIVE_NEWS"](newsData))
    }
};

export default connect(null, mapDispathToProps)(LastNewsItem);
