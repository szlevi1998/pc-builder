import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
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
/*

const NavBar = () => {
    return (
        <div className={"content-navbar"}>
            <Navbar bg={"dark"} variant={"dark"} sticky="top" expand="md" collapseOnSelect>
                <Navbar.Brand>
                    <img src={process.env.PUBLIC_URL + "/pc.png"}
                         alt="logo"
                         width="64px"
                         height="64px"/>{' '}Logo
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <NavDropdown.Item>
                        <NavDropdown title={"Menü"}>
                            <NavDropdown.Item href={"/prebuilds"}>Alap konfigok</NavDropdown.Item>
                            <NavDropdown.Item href={"/savedbuilds"}>Saját konfigom</NavDropdown.Item>
                            <NavDropdown.Item href={"/login"}>Kijelentkezés</NavDropdown.Item></NavDropdown>
                    </NavDropdown.Item>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default NavBar;
*/
