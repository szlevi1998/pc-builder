import React from "react";
import {Navbar} from "react-bootstrap";
import NavBar from "../NavBar";
import "../stylesheets/prebuilds.css";

function OpenPreBuilds() {
    return (<div>
            <NavBar></NavBar>
            <h1 className="title-h1">Alap konfigok</h1>
            <section className="intel-section">Intel konfigurációk</section>
            <section>
                <div>
                    <div className="row ">
                        <div className="col-md-4 left-element">Belépő szint</div>
                        <div className="col-md-4 middle-element">Alsóközép szint</div>
                        <div className="col-md-4 right-element">Közép szint</div>
                        <div className="col-md-4 left-element">Felsőközép szint</div>
                        <div className="col-md-4 middle-element">Erős szint</div>
                        <div className="col-md-4 right-element">Legerősebb szint</div>
                    </div>
                    </div>

            </section>
            <section className="amd-section">AMD konfigurációk</section>
            <section>
                <section>
                    <div>
                        <div className="row">
                            <div className="col-md-4 left-element">Belépő szint</div>
                            <div className="col-md-4 middle-element">Alsóközép szint</div>
                            <div className="col-md-4 right-element">Közép szint</div>
                            <div className="col-md-4 left-element">Felsőközép szint</div>
                            <div className="col-md-4 middle-element">Erős szint</div>
                            <div className="col-md-4 right-element">Legerősebb szint</div>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default class PreBuilds extends React.Component {
    render() {
        return <OpenPreBuilds/>
    }
}