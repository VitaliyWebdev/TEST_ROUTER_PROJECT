import React,{useEffect} from 'react';
import './post-style.css';

export default function Post ({post}){
    return (

        <div className="card-body post-box">
            <h4 className="card-title">{post.body}</h4>
            <p className="card-text">{post.title}</p>
            <a href={`/post/${post.userId}`} className="btn btn-primary">Create New Post</a>
        </div>
    );
}
