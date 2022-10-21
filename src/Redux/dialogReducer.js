import user1 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user2 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user3 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user4 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user5 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user6 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import dialogs from "../component/main/Dialogs/dialogs";

const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SET_DIALOGS = "SET_DIALOGS"

let initialState = {
    dialogs: [],
    newMessageBody: ""
}
const dialogsReducer = (state = initialState, action)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            let clone = {
                ...state, ...state.dialogs[action.count].returnMessages.push({message: body})
            }
            return {
                ...state, dialogs: [...clone.dialogs], newMessageBody: ""
            }
        case SET_DIALOGS:{
            return {...state, dialogs: [...action.dialogs]}
        }
        default: return state
    }
}

export const updateNewMessageCreator = (body)=>{
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    }
}
export const sendMessageCreator = (count)=>{
    return{
        type: SEND_MESSAGE,
        count
    }
}
export const setDialogsCreator = (dialogs) =>{
    return{
        type: SET_DIALOGS,
        dialogs
    }
}
export default dialogsReducer