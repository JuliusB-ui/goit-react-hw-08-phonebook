// UserMenu shows user Menu containing their email and LogOut button
import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";

export const UserMenu =() => {
    const {user}=useAuth();
    const userName = user.name
    const dispatch = useDispatch();

    const toLogOut = () => {
        dispatch(logOut())
    }
    return (
    <div>
        <p>Welcome! {userName}</p>
        <button onClick={toLogOut}>Log out</button>
    </div>
    )
}