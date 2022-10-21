import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, setPostsCreator, updateNewPostTextActionCreator} from "../../../../Redux/postReducer";
import Posts from "./posts";


class PostContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.posts.length === 0){
            this.props.setPosts([
                {id: 1, message: 'first message', likeCount: 2},
                {id: 2, message: '2 message', likeCount: 20},
                {id: 3, message: '3 message', likeCount: 12},
                {id: 4, message: '4 message', likeCount: 22},
                {id: 5, message: 'sfdsshdfjdf message', likeCount: 5},
                {id: 6, message: '6 message', likeCount: 2}
            ])
        }
    }
    render() {
        return (
            <Posts
            posts={this.props.posts}
            addPost={this.props.addPost}
            changePost={this.props.updateNewPostText}/>
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
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (PostContainer)

export default PostsContainer;