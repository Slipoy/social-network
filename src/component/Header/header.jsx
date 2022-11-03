import React from "react";
import style from "./header.module.css"
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";
import {NavLink} from "react-router-dom";
import LoginOut from "./loginOut/loginOut";



const Header = (props)=>{
    return (
        <header className={style.header}>
            {props.isAuth ? <LoginOut/> : <NavLink to={"/login"}>Login</NavLink>}

        </header>
    )
}
let mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(Header)