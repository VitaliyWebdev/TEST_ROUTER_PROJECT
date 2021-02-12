import React from 'react';
import {Switch} from "react-router-dom";
import Routes from "./Routes/Routes";

export default function App() {
    return (
        <div>
            <Switch>
                <Routes/>
            </Switch>
        </div>
    );
}
