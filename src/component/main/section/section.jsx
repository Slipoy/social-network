import React from "react";
import style from "./section.module.css"
import Posts from "./Posts/posts";
import PostContainer from "./Posts/PostContainer";
import ProfileContainer from "./profile/pofileContainer.ksx";
import Profile from "./profile/profile";


const Section = ()=>{
    return (
        <section>
            <ProfileContainer/>
            <PostContainer/>
        </section>
    )
}
export default Section