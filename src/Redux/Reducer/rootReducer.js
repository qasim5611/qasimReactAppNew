import todoReducer from './reducer';
import ReducerForDBdata from './ReducerForDB';

import {combineReducers} from 'redux';    //must to combine any two or more reducers

export default combineReducers ({
    todoReducer,
    ReducerForDBdata
    // user:gitHubUser,
})