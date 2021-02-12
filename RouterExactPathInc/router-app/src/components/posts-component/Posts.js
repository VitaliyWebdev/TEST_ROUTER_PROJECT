import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPosts} from "../../redux/action-creators";
import Post from "./Post";
import './post-style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import ModalWindow from "./ModalWindow";


export default function Posts() {
    const [isVisible, setIsVisible] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();
    const store = useSelector(store => store);
    const posts = useSelector(({posts: {posts}}) => posts);
    useEffect(async () => {
        let postsData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json());
        dispatch(setPosts(postsData));
        console.log(posts, 'posts')
    }, [])

    return (

        <div className="card">
            <h3 className="card-header post-title">Posts with user Id: {id}</h3>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">
                Huge modal
            </button>

            <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myHugeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at.
                    </div>
                </div>
            </div>

            <button type="button" className="btn btn-danger btn-lg w-25" onClick={() => history.push('/')}>Go back
            </button>

            {posts.map((post, key) => <Post key={key} post={post}/>)}

        </div>
    );
}
