import React from "react";
import "../stylesheets/register.css";
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function RegisterPage() {

    const navigation = useNavigate();
    const backToLogin = ()=>{
        navigation("/");
    }

    return (

        <div className="register-form">
            <h2 className="register-h2">Regisztráció</h2>
            <Form>
                <Form.Group className="register-surname">
                    <Form.Label>Vezetéknév</Form.Label>
                    <Form.Control className="register-controls"
                                  type="name"
                                  placeholder="Vezetéknév"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Keresztnév</Form.Label>
                    <Form.Control className="register-controls"
                                  type="name"
                                  placeholder="Keresztnév"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email-cím</Form.Label>
                    <Form.Control className="register-controls"
                                  type="email"
                                  placeholder="email@address.com"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Felhasználónév</Form.Label>
                    <Form.Control className="register-controls"
                                  placeholder="Felhasználónév"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control className="register-controls"
                                  type="password"
                                  placeholder="Jelszó"/>
                    <Form.Label>Jelszó újra</Form.Label>
                    <Form.Control className="register-controls"
                                  type="password"
                                  placeholder="Jelszó újra"
                    />
                </Form.Group>
            </Form>
            <button className="btn btn-outline-primary register-button">Regisztráció</button>
            <button onClick={backToLogin} className="btn btn-outline-primary register-button"> Vissza a bejelentkezési oldalra</button>
        </div>
    )
}

export default class Register extends React.Component {
    render() {
        return <RegisterPage/>
    }
}