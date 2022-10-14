import React from "react";
import img from './icon/photo_2022-10-06_12-19-26.jpg'
import style from './posts.module.css'




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
    let postItem = props.state.map(post => <Post message={post.message} id={post.id}/>)
    console.log(postItem)
    return(
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Post</button>
            {postItem}
        </div>
    )
}

export default Posts