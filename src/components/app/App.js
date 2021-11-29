import './App.css';
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { pathLinks } from '../../consts';
import Main from '../main/Main';
import NewsPage from '../news-page/NewsPage';
import Login from '../login/Login';
import useNewsStore from '../../stores/newsStore';

const App = () => {
  const newsStore = useNewsStore(store => store);

  useEffect(() => newsStore.fetchNews(), [])

  return newsStore.loaded && <Routes>
      <Route path = {pathLinks.home} element={<Main />} />
      <Route path = {pathLinks.newsPage} element={<NewsPage />} />
      <Route path = {pathLinks.login} element={<Login />} />
      <Route path="/" element={<Navigate replace to={pathLinks.home} />} />
    </Routes>
}

export default App;
