import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import env from '@beam-australia/react-env'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(env("API_URL")))))


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
