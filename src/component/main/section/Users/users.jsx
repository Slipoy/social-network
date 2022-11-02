import React from "react";
import style from "./users.module.css"
import image from "../../../../img/photo_2022-10-06_12-19-26.jpg"
import Nav from "../../nav/nav";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return (
        <div className={style.usersDisplay}>
            {props.users.map(user => <div className={style.user} key={user.id}>
                <p>{user.fullName}</p>
                <NavLink to="/profile/"><img src={user.image} alt=""/></NavLink>
                <p>{user.status}</p>
                <p>{user.location.country}</p>
                <div>
                    {user.followed
                        ? <button className={style.btnUnfollow} onClick={() => {props.follow(user.id)}}>Unfollow</button>
                        : <button className={style.btnFollow} onClick={() => {props.unfollow(user.id)}}>Follow</button>
                    }

                </div>

            </div>)
            }
        </div>
    )
}

export default Users;