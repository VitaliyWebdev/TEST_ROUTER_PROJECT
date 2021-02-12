import {CREATE_NEW_POST, SET_POSTS} from "../action-types";

const initialState = {
    posts: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POSTS: return {...state, posts: payload};
        case CREATE_NEW_POST:{
            return {...state, posts: [...state.posts, payload]}
        }
        default: return state
    }
}

export default reducer;
