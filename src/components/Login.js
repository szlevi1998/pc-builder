import React from 'react';
import {useForm} from 'react-hook-form';
import {Form} from 'react-bootstrap';

import '../stylesheets/login.css';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate('/register');
    }

    return (

        <div className='form-container w-75 text-md-center'>

            <Form>
                <h2 className='form-h1'>Bejelentkezés</h2>

                <Form.Group>
                    <Form.Label className='label-lg'>Felhasználónév</Form.Label>
                    <Form.Control className='container-usercontrol'
                                  type='text'
                                  name='userName'
                                  placeholder='Felhasználónév'
                                  {...register('userName', {
                                      required: true,
                                      minLength: 5,
                                      maxLength: 25
                                  })}
                    />
                    {errors.userName && errors.userName.type === 'required' &&
                        <span className='register-span'>Ez a mező nem lehet üres!</span>}
                    {errors.userName && errors.userName.type === 'minLength' &&
                        <span className='register-span'>A minimális karakterek száma 5!</span>}
                    {errors.userName && errors.userName.type === 'maxLength' &&
                        <span className='register-span'>A maximális karakterek száma 25!</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-pwd'>Jelszó</Form.Label>
                    <Form.Control className='container-pwdcontrol'
                                  type='password'
                                  placeholder='Jelszó'
                                  {...register('password', {
                                      required: true,
                                      minLength: 5,
                                      maxLength: 25
                                  })}
                    />
                    {errors.password && errors.password.type === 'required' &&
                        <span className='register-span'>Ez a mező nem lehet üres!</span>}
                    {errors.password && errors.password.type === 'minLength' &&
                        <span className='register-span'>A jelszó hossza legalább 5 karakter!</span>}
                    {errors.password && errors.password.type === 'maxLength' &&
                        <span className='register-span'>A maximális karakterek száma 25!</span>}
                </Form.Group>
                <button className='btn btn-outline-dark login' type='submit'>Bejelentkezés</button>
                <button onClick={navigateToRegister} className='btn btn-outline-dark register'>Regisztráció</button>
            </Form>
        </div>
    );
}

export default class Login extends React.Component {
    render() {
        return <LoginPage/>;
    }
}