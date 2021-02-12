import React from 'react';
import './post-style.css';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setChosenPost} from "../../redux/action-creators";

export default function Post({post}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const setChosenPostHandler = (e) => {
        e.preventDefault();
        dispatch(setChosenPost(post));
        history.push(`/post/${post.id}`)
    }

    return (

        <div className="card-body post-box">
            <h4 className="card-title">{post.body}</h4>
            <p className="card-text">{post.title}</p>
            <button type="button" className="btn btn-secondary" onClick={setChosenPostHandler}>Secondary</button>
        </div>
    );
}
