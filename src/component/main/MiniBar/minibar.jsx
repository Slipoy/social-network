import React from "react";
import style from "./minibar.module.css"
import {NavLink} from "react-router-dom";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../Redux/usersReducer";
import {connect} from "react-redux";




const Bar = (props)=>{
    return (
        <div className={style.list}>
            {props.users.map(user =>{if (user.followed) return <NavLink className={style.barItem} to={user.id}><img src={user.image}alt=""/> <p>{user.fullName}</p></NavLink>}) }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Bar)