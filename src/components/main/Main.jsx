import './Main.css';
import Header from '../header/Header';
import React from 'react';
import Banner from '../banner/Banner';
import LastNews from './last-news/LastNews';
import News from './news/News';
import useNewsStore from '../../stores/newsStore';

const Main = () => {
  const loaded = useNewsStore(store => store.loaded)

  return (
    <React.Fragment>
      <Header />
      <Banner />
      { loaded && <>
        <LastNews />
        <News />
      </>}
    </React.Fragment>
  );
}

export default Main;
