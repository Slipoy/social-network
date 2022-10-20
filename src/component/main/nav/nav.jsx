import React from "react";
import style from "./nav.module.css"
import {NavLink} from "react-router-dom";




const Nav = ()=>{
    return (
        <nav>
            <NavLink to="/profile" className={style.navLink}>My page</NavLink>
            <NavLink to="/message" className={style.navLink}>Message</NavLink>
            <NavLink to="/users" className={style.navLink}>Users</NavLink>
            <NavLink to="/videos" className={style.navLink}>Video</NavLink>
            <NavLink to="/profile" className={style.navLink}>My page</NavLink>
            <NavLink to="/profile" className={style.navLink}>My page</NavLink>

        </nav>
    )
}
export default Nav