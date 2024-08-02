import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loading/Loading';
import HomePage from 'pages/HomePage/HomePage';





export const App =() => {
  const dispatch=useDispatch();
  const {isRefreshing} = useAuth();
  
  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch]);

  return isRefreshing? (<Loader/>) : (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
        }/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
        }/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
        }/>
      </Route>
    </Routes>
  )

}

{/* <Toaster/>
<h1>Phonebook</h1>
<Form />

<h2>Contacts</h2>
<Filter/>
<List/> */}