// UserMenu shows user Menu containing their email and LogOut button
import { useAuth } from "hooks/useAuth";
import React from "react";

export const UserMenu =() => {
    const {user}=useAuth();
    const userName = user.name 
    return (
    <div>
        <p>Welcome! {userName}</p>
        <button >Log out</button>
    </div>
    )
}