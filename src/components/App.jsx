
import { React, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loading/Loading';
import {Routes, Route} from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))

export const App =() => {

  const {isRefreshing} = useAuth();
  


  return isRefreshing? (<Loader/>) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
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

