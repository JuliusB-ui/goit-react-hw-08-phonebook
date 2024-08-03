// contains Login Form (email and password)

import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/authOperations'
import css from './LoginPage.module.css'

const LoginPage = () => {

    const dispatch=useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleLogin = event => {
        event.preventDefault();
        if(email==="" || password === "") return;
        const credentials = {
            "email": email,
            "password": password,
        }
        dispatch(logIn(credentials))
    }

  return (
    <HelmetProvider>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <main>
            <form onSubmit={handleLogin} className={css.form}>
                <label>Email
                    <input className={css.input} type="email" name="email" value={email} onChange={handleEmailChange}/>
                </label>
                <label>Password
                    <input className={css.input} type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </label>
                <button className={css.button}>Log in</button>
            </form>
        </main>
    </HelmetProvider>
  )
}

export default LoginPage