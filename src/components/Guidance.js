import React from 'react';
import NavBar from '../NavBar';
import '../stylesheets/guidance.css';
import {Container} from "react-bootstrap";

function Guide() {
    return (
        <div>
            <NavBar/>

            <h3 className='guidance-h3' >Útmutató</h3>
            <Container className="container-md">
                <h3 className="container-h3">Alap konfigok</h3>
            </Container>

        </div>
    );
}

export default class Guidance extends React.Component {
    render() {
        return <Guide/>;
    }
}