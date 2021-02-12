import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPosts} from "../../redux/action-creators";
import Post from "./Post";
import './post-style.css';
import NewPost from "./NewPost";


export default function Posts() {
    const [isVisible, setIsVisible] = useState(true)
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();
    const posts = useSelector(({posts: {posts}}) => posts);

    useEffect(async () => {
        let postsData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json());
        dispatch(setPosts(postsData));
    }, [])
    const visibleHandler = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }

    return (
        <div className="card">
            <h3 className="card-header post-title">Posts with user Id: {id}</h3>
            {isVisible && <NewPost visibleHandler={visibleHandler}/>}
            <div className='d-flex justify-content-around'>
                <button type="button" className="btn btn-danger btn-lg w-25" onClick={() => history.push('/')}>Go back
                </button>
                <button type="button" className="btn-dark btn-lg w-25"
                        onClick={visibleHandler}>Create New Post
                </button>
            </div>
            {posts.map((post, key) => <Post key={key} post={post}/>)}
        </div>
    );
}
