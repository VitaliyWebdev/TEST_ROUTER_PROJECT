import {CREATE_NEW_POST, DELETE_POST, EDIT_POST, SET_CHOSEN_POST, SET_POSTS} from "../action-types";

const initialState = {
    posts: [],
    chosenPost: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POSTS: return {...state, posts: payload};
        case CREATE_NEW_POST: return {...state, posts: [...state.posts, payload]}
        case SET_CHOSEN_POST: return {...state, chosenPost: payload}
        case DELETE_POST: {
            const filtered = state.posts.filter(el => el.id !== payload)
            return {...state, posts: filtered}
        }
        case EDIT_POST: {
            const arrAll = state.posts.splice(payload.id, 1, payload);
            return {...state, posts: arrAll, chosenPost: payload}
        }
        default: return state
    }
}

export default reducer;
