import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import PreBuilds from './components/PreBuilds';
import SavedBuildPage from './components/SavedBuilds';
import PcBuilder from './components/PcBuilder';
import Memories from './components/builderpages/Memories';
import Motherboards from './components/builderpages/Motherboards';
import Processors from './components/builderpages/Processors';
import ProcessorCoolers from './components/builderpages/ProcessorCoolers';
import VideoCards from './components/builderpages/VideoCards';
import Storages from './components/builderpages/Storages';
import PcCases from './components/builderpages/PcCases';
import PowerSupplies from './components/builderpages/PowerSupplies';
import Monitors from './components/builderpages/Monitors';
import Guidance from './components/Guidance';

export default class SubPages extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/guidance' element={<Guidance/>}/>
                    <Route path='/prebuilds' element={<PreBuilds/>}/>
                    <Route path='/pcbuilder' element={<PcBuilder/>}/>
                    <React.Fragment>
                        <Route path='pcbuilder/memories' element={<Memories/>}/>
                        <Route path='pcbuilder/motherboards' element={<Motherboards/>}/>
                        <Route path='pcbuilder/monitors' element={<Monitors/>}/>
                        <Route path='pcbuilder/processors' element={<Processors/>}/>
                        <Route path='pcbuilder/processorcoolers' element={<ProcessorCoolers/>}/>
                        <Route path='pcbuilder/cases' element={<PcCases/>}/>
                        <Route path='pcbuilder/powersupplies' element={<PowerSupplies/>}/>
                        <Route path='pcbuilder/storages' element={<Storages/>}/>
                        <Route path='pcbuilder/videocards' element={<VideoCards/>}/>
                    </React.Fragment>
                    <Route path='/savedbuilds' element={<SavedBuildPage/>}/>
                </Routes>
            </Router>
        )
    }
}

