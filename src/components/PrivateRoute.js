import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    // return (
    //     // <Outlet
    //     //     {...rest}
    //     //     render={(props) => {
    return currentUser ? <Outlet /> : <Navigate replace to='/login' />;
    //     //     }}
    //     // ></Outlet>
    // );
}
