import React from "react";
import img from './icon/photo_2022-10-06_12-19-26.jpg'
import style from './posts.module.css'
import imgLike from '../../../../img/like2.png'
import likeTrue from "../../../../img/lukitrue.png"
import posts from "./posts";

const Post = (props)=>{
    return(
        <div className={style.post}>
            <div className={style.userPosting}>
                <img src={img} alt=""/>
                <div>
                    <p>Vadim Lukichev</p>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>
            </div>
            <div className={style.img}>
                <img src={img} alt="#"/>
            </div>
            <p className={style.messagePost}>{props.message}</p>
            <span onClick={()=>{props.upLike(props.postId)}} className={style.imgLike}><img src={props.liked ? likeTrue: imgLike} alt=""/>{props.likes}</span>
            <span className={style.dividingLine}></span>
        </div>
    )
}


const Posts = (props)=>{
    let newPostElement = React.createRef()
    return(
        <div className={style.postsDisplay}>
            <div className={style.createPost}>
                <p>My News</p>
                <textarea ref={newPostElement} onChange={()=>{props.changePost(newPostElement.current.value)}}></textarea>
                <button onClick={()=>{newPostElement.current.value = ""; props.addPost()}}>Post</button>
            </div>
            <div className={style.posts}>
                {props.posts.map(post => <Post upLike={props.upLike} message={post.message} key={post.id} postId={post.id} likes={post.likeCount} liked={post.like}/>)}
            </div>
        </div>

    )
}
export default Posts