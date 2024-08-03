// contains registration form(username, email, password)

import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(name==='' || email==='' || password==='') return;

        const credentials = {
            name: name,
            email: email,
            password: password,
        }
        dispatch(register(credentials))

        // setName('');
        // setEmail('');
        // setPassword('');
    }

  return (
    <HelmetProvider>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <main>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name='name' value={name} onChange={handleNameChange}/>
                </label>
                <label>Email
                    <input type="email" name='email' value={email} onChange={handleEmailChange}/>
                </label>
                <label>Password
                    <input type="password" name='password' value={password} onChange={handlePasswordChange}/>
                </label>
                <button >Register</button>
            </form>
        </main>
    </HelmetProvider>
  )
}

export default RegisterPage