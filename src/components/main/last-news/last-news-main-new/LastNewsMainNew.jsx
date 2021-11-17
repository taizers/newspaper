import './LastNewsMainNew.css';
import { Link } from 'react-router-dom';
import { pathLinks } from '../../../../consts';
import { generatePath } from 'react-router';
import { connect } from 'react-redux'; 
import { ActionCreators } from '../../../../reducer';

const LastNewsMainNew = (props) => {
  const { lastMainNews, changeActivNews } = props
  const pathToNews = generatePath(pathLinks.newsPage, { id: lastMainNews.id });

  const onClick = () =>{
    changeActivNews(lastMainNews);
  };

  return (
        <div className="last-news__main-new main-news">
            <Link to={pathToNews} className="main-news__wrapper" onClick={onClick}>
                <img className="main-news__image" src={lastMainNews.photo} alt={lastMainNews.title}  height="560" width="600"/>
                <div className="main-news__text">{lastMainNews.title}</div>
            </Link>
        </div>
  );
}
const mapDispathToProps = (dispath) => {
  return { 
      changeActivNews: (newsData) => dispath(ActionCreators["CHANGE_ACTIVE_NEWS"](newsData))
  }
};

export default connect(null, mapDispathToProps)(LastNewsMainNew);