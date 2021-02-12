import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

export default function User({user}) {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title"><b>Id:{user.id} - </b>{user.username}</h4>
                <p className="card-text"><b>email: </b>{user.email}</p>
                <p className="card-text"><b>phone number:</b> {user.phone}</p>
                <button type="button" onClick={() => history.push(`/posts/${user.id}`)}
                        className="btn btn-dark btn-lg btn-block">
                    Posts
                </button>
            </div>
        </div>
    );
}
