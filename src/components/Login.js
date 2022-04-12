import React from "react";
import {useForm} from "react-hook-form";
import {Form} from "react-bootstrap";

import '../stylesheets/login.css';

function LoginPage() {
    //const {register, handleSubmit} = useForm({mode: 'onChange'});

    return (

        <div className="form-container w-75 text-md-center">

            <Form>
                <h2 className="form-h1" >Bejelentkezés</h2>

                <Form.Group>
                    <Form.Label className="label-lg">Felhasználónév</Form.Label>
                    <Form.Control className="container-usercontrol"
                        type="text"
                        name="username"
                        placeholder="Felhasználónév"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="label-pwd" >Jelszó</Form.Label>
                    <Form.Control className="container-pwdcontrol"
                        type="password"
                        placeholder="Jelszó"
                    />

                </Form.Group>
                <button className="btn btn-outline-dark login" type="submit">Bejelentkezés</button>
                <button href={"/register"} className="btn btn-outline-dark register">Regisztráció</button>
            </Form>
        </div>
    );
}

export default class Login extends React.Component {
    render() {
        return <LoginPage/>;
    }
}