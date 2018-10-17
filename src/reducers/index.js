import { combineReducers } from 'redux';

import emailReducer from './emailReducer.js';

import presentationReducer from './presentationReducer.js';

const rootReducers = combineReducers({
    emailReducer,
    presentationReducer
})

export default rootReducers;
