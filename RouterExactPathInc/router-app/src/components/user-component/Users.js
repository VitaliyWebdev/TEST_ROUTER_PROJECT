import React, {useEffect} from 'react'
import './style.css'
import {setUsers} from "../../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";
import User from "./User";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({users: {users}}) => users);

    useEffect(async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        dispatch(setUsers(data))
    }, [])

    return (

        <div className="card-group wrapped-box">
            {users.map((user, id) => <User user={user} key={id}/>)}
        </div>


    );
}
