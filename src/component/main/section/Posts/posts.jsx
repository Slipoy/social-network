import React from "react";
import img from './icon/photo_2022-10-06_12-19-26.jpg'
import style from './posts.module.css'
import posts from "./posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/state";




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
    let state = props.posts._state.profilePage.posts
    let postItem = state.map(post => <Post message={post.message} id={post.id}/>)
    let newPostElement = React.createRef()
    let addPost = ()=>{
        newPostElement.current.value = ""
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return(
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={addPost}>Post</button>
            {postItem}
        </div>
    )
}

export default Posts