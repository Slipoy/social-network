import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";


const Section = (props)=>{
    return (
        <section>
            <Posts posts={props.store} dispatch={props.dispatch}/>
        </section>
    )
}
export default Section