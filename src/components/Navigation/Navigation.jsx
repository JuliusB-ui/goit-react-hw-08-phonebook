import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

// contains HomePage and ContactsPage

import React from 'react'
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
    const {isLoggedIn} = useAuth();
return(
    <nav className={css.navList}>
        <NavLink to="/" className={({isActive}) => (isActive? css.linkActive : css.link)}>Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={({isActive}) => (isActive? css.linkActive : css.link)}>Contacts</NavLink>}
    </nav>
)
}