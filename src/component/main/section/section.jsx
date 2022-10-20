import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";
import PostContainer from "./Posts/PostContainer";


const Section = (props)=>{
    return (
        <section>
            <PostContainer/>
        </section>
    )
}
export default Section