import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from 'react-router-dom'
import history from './history'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <Router history ={history}>
    <GlobalStyles/>
    <App />
  </Router>,
  document.getElementById('root')
);

