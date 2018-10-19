import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store.js';
import  App  from './components/app.jsx';


import {Provider} from 'react-redux';





ReactDOM.render( <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('index'))

