import React from "react";
import style from "./users.module.css"
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../Redux/usersReducer";

let Users = (props) => {
    return (
        <div className={style.usersDisplay}>
            {props.users.map(user => <div className={style.user} key={user.id}>
                <p>{user.fullName}</p>
                <NavLink to={'/profile/' + user.id}><img src={user.image} alt=""/></NavLink>
                <p>{user.status}</p>
                <p>{user.location.country}</p>
                <div>
                    {user.followed
                        ? <button className={style.btnUnfollow} onClick={() => {props.followUser(user.id)}}>Unfollow</button>
                        : <button className={style.btnFollow} onClick={() => {props.unfollowUser(user.id)}}>Follow</button>
                    }

                </div>

            </div>)
            }
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isAuth: state.auth.isAuth
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
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Users)