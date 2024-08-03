import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div>
        <h1 >Phonebook welcome page</h1>
      </div>
    </HelmetProvider>
  )
}

export default HomePage