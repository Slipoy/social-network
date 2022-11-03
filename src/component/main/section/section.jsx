import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";
import PostContainer from "./Posts/PostContainer";
import ProfileContainer from "./profile/pofileContainer.ksx";
import Profile from "./profile/profile";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../Redux/authReducer";
import {Navigate} from "react-router-dom";


const Section = (props)=>{
    if (props.isAuth === false) return <Navigate to={"/login"}/>
    return (
        <section>
            <ProfileContainer/>
            <PostContainer/>
        </section>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData}) (Section)