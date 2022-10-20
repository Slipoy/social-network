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
    let postItem = props.posts.map(post => <Post message={post.message} id={post.id} likes={post.likeCount}/>)
    let newPostElement = React.createRef()
    let onAddPost = ()=>{
        newPostElement.current.value = ""
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return(
        <div>
            <textarea ref={newPostElement} onChange={onPostChange}></textarea>
            <button onClick={onAddPost}>Post</button>
            {postItem}
        </div>
    )
}

export default Posts