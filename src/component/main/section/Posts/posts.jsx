import React from "react";
import img from './icon/photo_2022-10-06_12-19-26.jpg'
import style from './posts.module.css'
import posts from "./posts";

const Post = (props)=>{
    return(
        <div className={style.post}>
            TEST
            <img src={img} alt="#"/>
            <p>{props.message}</p>
            <button>Likes</button>
        </div>
    )
}



const Posts = (props)=>{
    let newPostElement = React.createRef()
    return(
        <div>
            <textarea ref={newPostElement} onChange={()=>{props.changePost(newPostElement.current.value)}}></textarea>
            <button onClick={()=>{newPostElement.current.value = ""; props.addPost()}}>Post</button>
            {props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likeCount}/>)}
        </div>
    )
}
export default Posts