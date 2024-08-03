// UserMenu shows user Menu containing their email and LogOut button
import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import css from './UserMenu.module.css'

export const UserMenu =() => {
    const {user}=useAuth();
    const userName = user.name
    const dispatch = useDispatch();

    const toLogOut = () => {
        dispatch(logOut())
    }
    return (
    <div className={css.userNav}>
        <p className={css.welcome}>Welcome, <span className={css.userName}>{userName}</span>!</p>
        <button onClick={toLogOut} className={css.button}>Logout</button>
    </div>
    )
}