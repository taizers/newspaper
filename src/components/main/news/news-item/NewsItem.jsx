import './NewsItem.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../consts';
import { generatePath } from 'react-router';
import { connect } from 'react-redux'; 
import { ActionCreators } from '../../../../reducer';

const NewsItem = (props) => {
    const { newsData, changeActivNews } = props;
    const pathToNews = generatePath(pathLinks.newsPage, { id: newsData.id });
    const onClick = () =>{
        changeActivNews(newsData);
    };
    return (
        <li className="news__item"> 
            <Link to={pathToNews} onClick = { onClick }>
                <img className="news__image" src={newsData.photo} alt={newsData.title} width="340" height="220" />
                <p className="news__text">{newsData.title}</p>
            </Link>
        </li>
    );
};

const mapDispathToProps = (dispath) => {
    return { 
        changeActivNews: (newsData) => dispath(ActionCreators["CHANGE_ACTIVE_NEWS"](newsData))
    }
};

export default connect(null, mapDispathToProps)(NewsItem);
