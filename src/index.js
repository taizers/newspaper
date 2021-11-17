import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer, ActionCreators } from './reducer';
import { news } from './mocks/mocks.json';

const init = () => {
  const store = createStore(reducer);
  store.dispatch(ActionCreators['LOAD_DATA'](news));
  store.dispatch(ActionCreators['LOAD_LAST_NEWS'](news));
  ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
};

init();
