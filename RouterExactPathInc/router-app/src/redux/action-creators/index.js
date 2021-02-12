import {
    CREATE_NEW_POST,
    DELETE_POST,
    EDIT_POST,
    SET_CHOSEN_POST,
    SET_COMMENTS,
    SET_POSTS,
    SET_USERS
} from "../action-types";

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const createNewPost = (payload) => ({type: CREATE_NEW_POST, payload});
export const setComments = (payload) => ({type: SET_COMMENTS, payload});
export const setChosenPost = (payload) => ({type: SET_CHOSEN_POST, payload});
export const deleteChosenPost = (payload) => ({type: DELETE_POST, payload});
export const editPost = (payload) => ({type: EDIT_POST, payload});
