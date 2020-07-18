import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from 'react-router-dom'
import history from './history'
import GlobalStyles from './globalStyles'
import {ThemeProvider} from 'styled-components'
import Theme from './theme'

//redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Store from './data/store'


const store = createStore(Store);

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

