// header contains the nav bar(Navigation) and the changing login(UserMenu and AuthNav)



import React from 'react';
import { Toaster } from 'react-hot-toast';
import {Navigation} from '../Navigation/Navigation'
import {UserMenu} from '../UserMenu/UserMenu'
import { AuthNav } from '../AuthNav/AuthNav'
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
    const { isLoggedIn }= useAuth();
return (
    <header >
           <Toaster/>
        <Navigation />
        {isLoggedIn? <UserMenu/> : <AuthNav/>}
    </header>
)
}
