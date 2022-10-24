import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";
import PostContainer from "./Posts/PostContainer";
import Profile from "./profile/profile";


const Section = ()=>{
    return (
        <section>
            <Profile />
            <PostContainer/>
        </section>
    )
}
export default Section