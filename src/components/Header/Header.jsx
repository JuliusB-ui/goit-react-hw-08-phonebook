// header contains the nav bar(Navigation) and the changing login(UserMenu and AuthNav)

import React from 'react';
import {Navigation} from '../Navigation/Navigation'
import {UserMenu} from '../UserMenu/UserMenu'
import { AuthNav } from '../AuthNav/AuthNav'
import { useAuth } from 'hooks/useAuth';
import css from './Header.module.css'

export const Header = () => {
    const { isLoggedIn }= useAuth();
return (
    <header className={css.header}>
        <Navigation />
        {isLoggedIn? <UserMenu/> : <AuthNav/>}
    </header>
)
}
