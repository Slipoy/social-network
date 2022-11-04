import React from "react";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component) => {

    const checkAuth = (props)=>{
        if (props.isAuth === false) return <Navigate to={"/login"}/>
        return (
            <Component {...props}/>
        )
    }
    return checkAuth;
}