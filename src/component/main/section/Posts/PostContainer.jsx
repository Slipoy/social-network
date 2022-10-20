import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/postReducer";
import Posts from "./posts";





let mapStateToProps = (state) =>{
    return{
        posts: state.postPage.posts,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer;