import React from "react";
import style from   "./login.module.css"
import {setAuthUserData} from "../../../Redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom"


const Login = (props)=> {
    if (props.isAuth === true) return <Navigate to='/message'/>
    // const submitHandler = () => {
    //     props.setAuthUserData();
    // }
    return(
        <div className={style.login}>
            <form action="">
                <div>
                    <label htmlFor="">Login</label><br/>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Password</label><br/>
                    <input type="text"/>
                </div>
                <button onClick={()=>props.setAuthUserData()}>Login</button>
            </form>

        </div>
    )
}
let mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(Login)