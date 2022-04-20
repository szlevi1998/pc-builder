import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import "./stylesheets/NavBar.css"

const NavBar = () => {

    const navigateToHome = useNavigate();

    function toHome() {
        navigateToHome('/home');
    }

    return (
        <div className="navs">
            <Navbar collapseOnSelect expand="sm"
                    bg="dark"
                    variant="dark">
                    <Navbar.Brand>
                        <img src={process.env.PUBLIC_URL + "/pc.png"} alt="logo"
                             width="64px"
                             height="64px"
                             className="image-for-navbar"
                             onClick={toHome}
                        />{'PCBuilder'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <NavDropdown title="Menü" id="collasible-nav-dropdown">
                                <NavDropdown.Item title="/guidance">Útmútató</NavDropdown.Item>
                                <NavDropdown.Item href="/prebuilds">Alap konfigok</NavDropdown.Item>
                                <NavDropdown.Item href="/pcbuilder">Konfig építő</NavDropdown.Item>
                                <NavDropdown.Item href="/savedbuilds">Konfigom</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
export default NavBar;
