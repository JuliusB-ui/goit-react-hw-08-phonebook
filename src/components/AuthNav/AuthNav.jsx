// AuthNav contains register and login page

import React from 'react'
import css from '../Navigation/Navigation.module.css'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
return (
    <nav className={css.authNav}>
        <NavLink to="/register" className={({isActive}) => (isActive? css.linkActive : css.link)}>Register</NavLink>
        <NavLink to="/login" className={({isActive}) => (isActive? css.linkActive : css.link)}>Login</NavLink>
    </nav>
)
}
