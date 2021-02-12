import React from 'react';
import './edit-style.css';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {editPost} from "../../redux/action-creators";
import {putPost} from "../../services/postService";

export default function PostEdit({body, title, visibleHandler, userId}) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const inp1 = React.createRef();
    const inp2 = React.createRef();

    const saveChangesHandler = (e) => {
        e.preventDefault();
        visibleHandler();
        putPost(id, inp2.current.value, inp1.current.value, userId);
        dispatch(editPost({
            body: inp1.current.value,
            title: inp2.current.value,
            id,
            userId
        }))
    }
    return (
        <div className='edit-container'>
            <input type="text" placeholder={body} ref={inp1}/>
            <input type="text" placeholder={title} ref={inp2}/>
            <button type="button" className="btn btn-primary" onClick={saveChangesHandler}>Save Changes</button>
        </div>
    );
}
