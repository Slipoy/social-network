import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../../../Redux/usersReducer";


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
export default connect(mapStateToProps, mapDispatchToProps) (Users)