// contains Phonebook form, Filter, Contacts List

import {React, useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Form } from 'components/Form/Form'
import { Filter } from 'components/Filter/Filter'
import { List } from 'components/List/List'
import { useDispatch } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'


const ContactsPage = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchContacts())
      }, [dispatch]);

  return (
    <HelmetProvider>
        <Helmet>
            <title>Contacts</title>
        </Helmet>
        <div>

            <Form />

            <h2>Contacts</h2>
            <Filter/>
            <List/>
        </div>
    </HelmetProvider>
  )
}

export default ContactsPage
