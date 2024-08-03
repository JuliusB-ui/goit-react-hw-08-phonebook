// AuthNav contains register and login page

import React from 'react'
import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
return (
    <nav>
        <NavLink to="/register" className={({isActive}) => (isActive? css.linkActive : css.link)}>Register</NavLink>
        <NavLink to="/login" className={({isActive}) => (isActive? css.linkActive : css.link)}>Login</NavLink>
    </nav>
)
}
