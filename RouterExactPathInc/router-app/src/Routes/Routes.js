import React from 'react';
import {Route} from "react-router-dom";
import Users from "../components/user-component/Users";
import Posts from "../components/posts-component/Posts";
import PostInfo from "../components/posts-component/PostInfo";


export default function Routes() {
    return (
        <div>
            <Route path='/' exact={true} component={Users}/>
            <Route path='/posts/:id' component={Posts}/>
            <Route path='/post/:id' component={PostInfo}/>
        </div>
    );
}
