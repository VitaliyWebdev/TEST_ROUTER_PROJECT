import {combineReducers} from "redux";
import users from './user-reducer';
import posts from './post-reducer';

export const reducer = combineReducers({
    users,
    posts,

})
