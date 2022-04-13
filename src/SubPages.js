import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import savedBuilds from "./components/SavedBuilds";
import PreBuilds from "./components/PreBuilds";
import NavBar from "./NavBar";


export default class SubPages extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <React.Fragment>
                       <Route path="/home" element={<HomePage/>}/>
                        <Route path='/prebuilds' element={<PreBuilds/>}/>
                        <Route path='/savedbuilds' element={savedBuilds}/>
                    </React.Fragment>

                </Routes>
            </Router>
        )
    }
}
/*
<NavBar/>*/
