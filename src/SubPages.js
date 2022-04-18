import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import PreBuilds from "./components/PreBuilds";
import SavedBuildPage from "./components/SavedBuilds";
import PcBuilder from "./components/PcBuilder";
import Memories from "./components/builderpages/Memories";
import Motherboards from "./components/builderpages/Motherboards";
import Processors from "./components/builderpages/Processors";
import ProcessorCoolers from "./components/builderpages/ProcessorCoolers";
import VideoCards from "./components/builderpages/VideoCards";
import Storages from "./components/builderpages/Storages";
import PcCases from "./components/builderpages/PcCases";
import PowerSupplies from "./components/builderpages/PowerSupplies";

export default class SubPages extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path='/prebuilds' element={<PreBuilds/>}/>
                    <Route path='/pcbuilder' element={<PcBuilder/>}/>
                    <React.Fragment>
                        <Route path='pcbuilder/motherboards' element={<Motherboards/>}></Route>
                        <Route path='pcbuilder/processors' element={<Processors/>}></Route>
                        <Route path='pcbuilder/processorcoolers' element={<ProcessorCoolers/>}></Route>
                        <Route path='pcbuilder/memories' element={<Memories/>}></Route>
                        <Route path='pcbuilder/videocards' element={<VideoCards/>}></Route>
                        <Route path='pcbuilder/storages' element={<Storages/>}></Route>
                        <Route path='pcbuilder/cases' element={<PcCases/>}></Route>
                        <Route path='pcbuilder/powersupplies' element={<PowerSupplies/>}></Route>
                    </React.Fragment>
                    <Route path='/savedbuilds' element={<SavedBuildPage/>}/>
                </Routes>
            </Router>
        )
    }
}

