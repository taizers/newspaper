import './NewsPage.css';
import Header from '../header/Header';
import React from 'react';
import NewsPageContent from './news-page-content/NewsPageContent';

const NewsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <NewsPageContent />
        </React.Fragment>
    );
  }
  
export default NewsPage;