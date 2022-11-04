import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import dialogsReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authUserReducer from "./authReducer";


let reducers = combineReducers({
    postPage: postReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth:authUserReducer
})
let store = createStore(reducers)

export default store