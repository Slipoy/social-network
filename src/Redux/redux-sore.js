import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import dialogsReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authUserReducer from "./authReducer";


let reducers = combineReducers({
    postPage: postReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    auth:authUserReducer
})
let store = createStore(reducers)

export default store