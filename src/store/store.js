import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

import promise from 'redux-promise-middleware';

import  rootReducers  from '../reducers/index.js'

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(rootReducers, middleware);


store.subscribe(()=>{
  console.log(store.getState())
})

export default store;
