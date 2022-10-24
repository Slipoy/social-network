import React from "react";
import style from "./minibar.module.css"
import {NavLink} from "react-router-dom";



const Bar = ()=>{
    return (
        <div className={style.list}>
            <NavLink to="№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
            <NavLink to="/№" className={style.barItem}></NavLink>
        </div>
    )
}
export default Bar