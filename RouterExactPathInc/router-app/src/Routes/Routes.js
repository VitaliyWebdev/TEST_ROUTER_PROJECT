import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "../components/user-component/Users";
import Posts from "../components/posts-component/Posts";
import NewPost from "../components/posts-component/NewPost";


export default function Routes (){
    return (
        <div>
<Route path='/' exact={true} component={Users}/>
<Route path='/posts/:id' component={Posts}/>
<Route path='/post/:id' component={NewPost}/>
        </div>
    );
}
