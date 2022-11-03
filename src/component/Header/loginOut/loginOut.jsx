import React from "react";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserOut} from "../../../Redux/authReducer";


const LoginOut = (props)=> {
    return(
        <div>
            <p>Вадим Лукичев</p>
            <button onClick={()=>props.setAuthUserOut()}>Выход</button>
        </div>
    )
}
let mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserOut})(LoginOut)