// @flow

import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import searchReducer from './searchReducer';

const combinedReducers = combineReducers({
    counterReducer,
    searchReducer
})

export default combinedReducers;