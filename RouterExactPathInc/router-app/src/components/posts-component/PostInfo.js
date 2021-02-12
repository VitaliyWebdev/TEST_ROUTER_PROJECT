import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getComments} from "../../services/coments-service";
import {deleteChosenPost, setComments} from "../../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";
import '../../App.css'
import PostEdit from "../edit-component/PostEdit";


export default function PostInfo() {
    const [visible, setVisible] = useState(true)
    const history = useHistory();
    const dispatch = useDispatch();
    const {idHistory} = useParams();
    const comments = useSelector(({comments: {comments}}) => comments);
    const {body, title, userId, id} = useSelector(({posts: {chosenPost}}) => chosenPost)
    useEffect(async () => {
        let data = await getComments(id);
        dispatch(setComments(data));
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault()
        deleteChosenPost(idHistory)
        dispatch(deleteChosenPost(+idHistory));
        history.push(`/posts/${userId}`)
    }

    const visibleHandler = () => {
        visible ? setVisible(false) : setVisible(true)
    }
    return (
        <div>
            <div className="edit-box">
                <button type="button" className="btn btn-success" onClick={visibleHandler}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </div>
            {visible ? <div className='post-info'>
                <h3>{body}</h3>
                <h4>{title}</h4>
            </div> : <PostEdit body={body} title={title} visibleHandler={visibleHandler} userId={userId}/>}
            Comments
            <div className="card-group coment-box">
                {comments.map((coment, id) => <div className="card" key={id}>
                    <div className="card-body">
                        <h4 className="card-title">{coment.name}</h4>
                        <h5 className="card-title">email:{coment.email}</h5>
                        <p className="card-text">{coment.body}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
}
