// contains registration form(username, email, password)

import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const RegisterPage = () => {

    const dispatch=useDispatch();

    const onSubmit =({name, email, password})=> {
        const credentials = {
            name: name,
            email: email,
            password: password,
        }
        dispatch(register(credentials))
    }

  return (
    <HelmetProvider>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <main>
            <form>
                <label>Name
                    <input type="text" name='name' required/>
                </label>
                <label>Email
                    <input type="email" name='email' required/>
                </label>
                <label>Password
                    <input type="text" name='password' required/>
                </label>
                <button onSubmit={onSubmit}>Register</button>
            </form>
        </main>
    </HelmetProvider>
  )
}

export default RegisterPage