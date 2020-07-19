import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Styles

import GlobalStyles from './globalStyles'
import {ThemeProvider} from 'styled-components'
import Theme from './theme'

//routs

import {Router} from 'react-router-dom'
import history from './history'


//redux
import {Provider} from 'react-redux'
import configureStore from './data/store'

const store = configureStore();

ReactDOM.render(
  
  <Router history ={history}>
    <Provider store = {store}>
    <ThemeProvider theme ={Theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

