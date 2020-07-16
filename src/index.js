import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from 'react-router-dom'
import history from './history'
import GlobalStyles from './globalStyles'
import {ThemeProvider} from 'styled-components'
import Theme from './theme'

ReactDOM.render(
  <Router history ={history}>
    <ThemeProvider theme ={Theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

