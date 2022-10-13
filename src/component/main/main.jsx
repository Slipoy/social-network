import React from "react";
import style from "./main.module.css"


const Main = (props)=> {
    return (
        <main>
            {props.name}
            {props.children}
        </main>
    )
}
export default Main