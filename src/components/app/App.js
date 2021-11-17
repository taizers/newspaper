import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { pathLinks } from '../../consts';
import Main from '../main/Main';
import NewsPage from '../news-page/NewsPage';
import Login from '../login/Login';

const App = () => {
  return (
    <Routes>
      <Route path = {pathLinks.home} element={<Main />} />
      <Route path = {pathLinks.newsPage} element={<NewsPage />} />
      <Route path = {pathLinks.login} element={<Login />} />
      <Route path="/" element={<Navigate replace to={pathLinks.home} />} />
    </Routes>
  );
}

export default App;
