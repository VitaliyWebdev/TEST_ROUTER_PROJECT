import {CREATE_NEW_POST, SET_POSTS, SET_USERS} from "../action-types";

export const setUsers = (payload) => ({type:SET_USERS,payload});
export const setPosts = (payload) => ({type:SET_POSTS,payload});
export const createNewPost = (payload) => ({type:CREATE_NEW_POST,payload});
