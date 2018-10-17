import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

import promise from 'redux-promise-middleware';

import  combinedReducers  from '../reducers/index.js'

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(combinedReducers, middleware);


store.subscribe(()=>{
  console.log(store.getState())
})

export default store;
