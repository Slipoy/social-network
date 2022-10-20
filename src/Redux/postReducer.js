const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'first message', likeCount: 2},
        {id: 2, message: '2 message', likeCount: 20},
        {id: 3, message: '3 message', likeCount: 12},
        {id: 4, message: '4 message', likeCount: 22},
        {id: 5, message: 'sfdsshdfjdf message', likeCount: 5},
        {id: 6, message: '6 message', likeCount: 2}
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
               posts: [...state.posts, newPost],
               newPostText: ""
           }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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

export default postReducer;