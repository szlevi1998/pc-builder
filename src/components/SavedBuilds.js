import React from 'react';
import NavBar from '../NavBar';

function SavedBuilds() {
    return <div>
        <NavBar></NavBar>
        <h1>This is the home page</h1>
    </div>
}

export default class SavedBuildPage extends React.Component {
    render() {
        return <SavedBuilds/>
    }
}