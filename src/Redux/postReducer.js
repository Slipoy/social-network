import posts from "../component/main/section/Posts/posts";
import {type} from "@testing-library/user-event/dist/type";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_POSTS = "SET_POSTS"
const UP_LIKE = "UP_LIKE"

let initialState = {
    posts: [
        {id: 1, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 2, like: false},
        {id: 2, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 20, like: false},
        {id: 3, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 12, like: false},
        {id: 4, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 22, like: false},
        {id: 5, message: 'This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English. message', likeCount: 5, like: false},
        {id: 6, message: '6 This page contains texts in English for the 5th grade. Reading contributes to the development of clear and precise thinking, and, as a result, speech. Therefore, we recommend reading in English.', likeCount: 2, like: false}
    ],
    newPostText: ""
}
const postReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
           return {
               ...state,
               posts: [newPost, ...state.posts],
               newPostText: ""
           }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_POSTS:{
            return {...state, posts: [...action.posts]}
        }
        case UP_LIKE:{
            return {
                ...state,  posts: state.posts.map(post => {
                    if (post.id === action.key && !post.like){
                        return {...post, likeCount: post.likeCount + 1, like: !post.like}
                    }else if (post.id === action.key && post.like){
                        return {...post, likeCount: post.likeCount - 1, like: !post.like}
                    }
                    return post
                })
            }
        }
        default: return state
    }
}

export const addPostActionCreator = ()=>{
    return {
        type: "ADD_POST"
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return{
        type: "UPDATE_NEW_POST_TEXT",
        newText: text
    }
}
export const setPostsCreator = (posts) =>{
    return{
        type: SET_POSTS,
        posts
    }
}
export const upLikeCreator = (key)=>{
    return{
        type: UP_LIKE,
        key

    }
}

export default postReducer;