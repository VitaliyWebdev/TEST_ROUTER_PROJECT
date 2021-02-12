import React, {useState} from 'react';
import './post-style.css';
import {useHistory, useParams,} from "react-router-dom";
import {postPost} from "../../services/postService";
import {useDispatch} from "react-redux";
import {createNewPost} from "../../redux/action-creators";


export default function NewPost() {
    const dispatch = useDispatch();
    const [newPost, setNewPost] = useState([]);
    const history = useHistory();
    const {id} = useParams();

    const onCreateHandler = async (e) => {
        e.preventDefault();
        await postPost(e.target[0].value, e.target[1].value, id)
              dispatch(createNewPost({
            userId: +id,
            id: new Date().getTime(),
            title: e.target[0].value,
            body: e.target[1].value
        }))
        history.push(`/posts/${id}`)
    }
    return (
        <div className='main-create-container'>
            <h1>Create new post</h1>
            <div className="input-group form-container">
                <form action="" onSubmit={onCreateHandler}>
                    <input type="text" className="form-control" placeholder="Title" name='title'/>
                    <input type="text" className="form-control" placeholder="Body"/>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Create</button>
                        <button className="btn btn-success" type="button"
                                onClick={() => history.push(`/posts/${id}`)}>Cancel
                        </button>
                    </div>
                </form>
            </div>

        </div>

    );
}
