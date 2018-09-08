import {combineReducers} from 'redux';
import todo from './todos';
import list from './list';

export default combineReducers(
    {
        todo,
        list
    }
);




