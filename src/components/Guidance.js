import React from 'react';
import NavBar from '../NavBar';

function Guide() {
    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default class Guidance extends React.Component {
    render() {
        return <Guide/>;
    }
}