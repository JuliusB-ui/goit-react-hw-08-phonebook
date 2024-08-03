// contains Login Form (email and password)

import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const LoginPage = () => {
  return (
    <HelmetProvider>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <main>
            <form>
                <label>Email
                    <input/>
                </label>
                <label>Password
                    <input/>
                </label>
                <button>Log in</button>
            </form>
        </main>
    </HelmetProvider>
  )
}

export default LoginPage