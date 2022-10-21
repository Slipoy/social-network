import posts from "../component/main/section/Posts/posts";
import {type} from "@testing-library/user-event/dist/type";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_POSTS = "SET_POSTS"

let initialState = {
    posts: [],
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
               posts: [...state.posts, newPost],
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

export default postReducer;