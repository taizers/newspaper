import './NewsPageContent.css';
import { connect } from 'react-redux';

const NewsPageContent = (props) => {
  const { newsData } = props;
  return (
    <section className="news-page-content content">
        
        <div className="container content__container">
            <h2 className="content__title">{newsData.title}</h2>
            <h3 className="content__sub-title">{newsData.sub_title}</h3>
            <img className="content__image" src={newsData.photo} alt={newsData.title} width="900" height="550"/> 
            <div className="content__text">{newsData.text}</div>
        </div>
    </section>
  );
};

const mapStateToProps = (state,ownProps) => {
  return Object.assign({}, ownProps, {
      newsData : state.currentNewsPage,
  });
};

export default connect(mapStateToProps)(NewsPageContent);
