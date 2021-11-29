import './NewsPage.css';
import Header from '../header/Header';
import React from 'react';
import NewsPageContent from './news-page-content/NewsPageContent';
import useNewsStore from '../../stores/newsStore';
import { useParams } from 'react-router';

const NewsPage = () => {
  const news = useNewsStore(store => store.news)
  const newsId = parseInt(useParams().id)

  return (
    <React.Fragment>
      <Header />
      <NewsPageContent newsData={news[newsId]} />
    </React.Fragment>
  );
}
export default NewsPage;
