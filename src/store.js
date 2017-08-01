import { createStore } from 'redux';

import lifeReducer from './reducers/lifeReducer';

import life from './data/life.js';

// create object for default data
const defaultState = {life, time:0}

const store = createStore(lifeReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
