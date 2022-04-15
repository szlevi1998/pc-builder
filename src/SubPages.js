import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import PreBuilds from "./components/PreBuilds";
import SavedBuildPage from "./components/SavedBuilds";

export default class SubPages extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path='/prebuilds' element={<PreBuilds/>}/>
                    <Route path='/savedbuilds' element={<SavedBuildPage/>}/>
                </Routes>
            </Router>
        )
    }
}

