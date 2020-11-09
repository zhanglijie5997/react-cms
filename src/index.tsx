import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Router } from "react-router-dom";
import App from './App';
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import Page from './Page';
import Routers from "./router/Router";
const store = configureStore(createBrowserHistory());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
