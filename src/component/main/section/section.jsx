import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";


const Section = (props)=>{
    return (
        <section>
            <Posts state={props.state}/>
        </section>
    )
}
export default Section