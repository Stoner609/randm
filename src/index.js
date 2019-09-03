import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import { StoreProvider } from "./store/Store";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";

import "./index.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App path="/">
        <Route exact path="/" component={HomePage} />
        <Route path="/faves" component={FavPage} />
      </App>
    </BrowserRouter>
  </StoreProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
