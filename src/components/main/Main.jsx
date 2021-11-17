import './Main.css';
import Header from '../header/Header';
import React from 'react';
import Banner from '../banner/Banner';
import LastNews from './last-news/LastNews';
import News from './news/News';

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner /> 
            <LastNews />
            <News />
        </React.Fragment>
    );
  }
  
export default Main;