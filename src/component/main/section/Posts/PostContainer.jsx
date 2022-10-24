import React from "react";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    setPostsCreator,
    updateNewPostTextActionCreator,
    upLikeCreator
} from "../../../../Redux/postReducer";
import Posts from "./posts";


class PostContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.posts.length === 0){
            this.props.setPosts([
                {id: 1, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 2, like: false},
                {id: 2, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 20, like: false},
                {id: 3, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 12, like: false},
                {id: 4, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 22, like: false},
                {id: 5, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English. message', likeCount: 5, like: false},
                {id: 6, message: '6 This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 2, like: false}
            ])
        }
    }
    render() {
        return (
            <Posts
            posts={this.props.posts}
            addPost={this.props.addPost}
            changePost={this.props.updateNewPostText}
            upLike={this.props.upLike}/>
        )
    }
}


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
        },
        setPosts: (posts)=>{
            dispatch(setPostsCreator(posts))
        },
        upLike: (key)=>{
            dispatch(upLikeCreator(key))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (PostContainer)

export default PostsContainer;