// Private route - can't access /contacts if not logged in

import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const {isLoggedIn, isRefreshing} = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component ;
}