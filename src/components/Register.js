import React from 'react';
import '../stylesheets/register.css';
import {Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function RegisterPage() {

    const navigation = useNavigate();
    const backToLogin = () => {
        navigation('/');
    }
    {/*onSubmit={handleSubmit()}*/}
    const {register,handleSubmit,getValues,formState:{errors}} = useForm({mode:'onChange'});

    return (

        <div className='register-form'>
            <h2 className='register-h2'>Regisztráció</h2>
            <Form>

                <Form.Group className='register-surname' controlId={'lastName'}>
                    <Form.Label>Vezetéknév</Form.Label>
                    <Form.Control className='register-controls'
                                  type='text'
                                  name="surName"
                                  placeholder='Vezetéknév'
                                  {...register('surName',
                                      {
                                          required: true,
                                          maxLength: 20,
                                  })}
                    />
                    {errors.surName && errors.surName.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.surName && errors.surName.type === 'maxLength' && <span className="register-span">A karakterek száma  20!</span> }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Keresztnév</Form.Label>
                    <Form.Control className='register-controls'
                                  type='text'
                                  name='lastName'
                                  placeholder='Keresztnév'
                                  {...register('lastName',
                                      {
                                          required: true,
                                          maxLength: 20,
                                      })}
                    />
                    {errors.lastName && errors.lastName.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.lastName && errors.lastName.type === 'maxLength' && <span className="register-span">A maximális karakterek száma  20!</span> }

                </Form.Group>

                <Form.Group>
                    <Form.Label>Email-cím</Form.Label>
                    <Form.Control className='register-controls'
                                  type='text'
                                  name='email'
                                  placeholder='email@address.com'
                                  {...register('email',{
                                      required: true,
                                      maxLength: 50,
                                      pattern: /^[a-zA-Z\d\W]+@(?:[a-zA-Z\d]+\.)+[A-Za-z]+$/
                                      }
                                  )}
                    />
                    {errors.email && errors.email.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.email && errors.email.type === 'maxLength' && <span className="register-span">A maximális karakterek száma 50!</span> }
                    {errors.email && errors.email.type === 'pattern' && <span className="register-span">Az email cím formátuma nem megfelelő!</span> }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Felhasználónév</Form.Label>
                    <Form.Control className='register-controls'
                                  type='text'
                                  name='userName'
                                  placeholder='Felhasználónév'
                                  {...register('userName',{
                                      required:true,
                                      minLength:5,
                                      maxLength: 25,
                                      pattern: /^[A-Za-z\d\W]+$/
                                  })}
                    />
                    {errors.userName && errors.userName.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.userName && errors.userName.type === 'minLength' && <span className="register-span">A minimális karakterek száma 5!</span> }
                    {errors.userName && errors.userName.type === 'maxLength' && <span className="register-span">A maximális karakterek száma 25!</span> }
                    {errors.userName && errors.userName.type === 'pattern' && <span className="register-span">A felhasználóneved nem megengedett karaktert tartalmaz!</span> }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control className='register-controls'
                                  type='password'
                                  name='password'
                                  placeholder='Jelszó'
                                  {...register('password',{
                                      required:true,
                                      maxLength:20,
                                      minLength:5,
                                  })}
                    />
                    {errors.password && errors.password.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.password && errors.password.type === 'maxLength' && <span className="register-span">A maximális karakterszám 20!</span> }
                    {errors.password && errors.password.type === 'minLength' && <span className="register-span">A jelszó hossza legalább 5 karakter!</span> }
                    <Form.Label>Jelszó újra</Form.Label>
                    <Form.Control className='register-controls'
                                  type='password'
                                  name='passwordConfirm'
                                  placeholder='Jelszó újra'
                                  {...register('passwordConfirm',{
                                      required:true,
                                      maxLength:20,
                                      minLength:5,
                                      pattern: /[a-zA-Z\d]{5,}/
                                  })}
                    />
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'required' && <span className="register-span">Ez a mező nem lehet üres!</span>}
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'maxLength' && <span className="register-span">A maximális karakterek száma  20!</span> }
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'minLength' && <span className="register-span">A jelszó hossza legalább 5 karakter!</span> }
                    {errors.passwordConfirm && errors.passwordConfirm.type === 'pattern' && <span className="register-span">A jelszó hossza legalább 5 karakter!</span> }
                </Form.Group>
            </Form>
            <button className='btn btn-outline-primary register-button' type="submit">Regisztráció</button>
            <button onClick={backToLogin} className='btn btn-outline-primary register-button'> Vissza a bejelentkezési
                oldalra
            </button>
        </div>
    )
}

export default class Register extends React.Component {
    render() {
        return <RegisterPage/>
    }
}