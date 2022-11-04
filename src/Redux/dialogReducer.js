import user1 from "../img/photo_2022-10-06_12-19-26.jpg";
import user2 from "../img/photo_2022-10-06_12-19-26.jpg";
import user3 from "../img/photo_2022-10-06_12-19-26.jpg";
import user4 from "../img/photo_2022-10-06_12-19-26.jpg";
import user5 from "../img/photo_2022-10-06_12-19-26.jpg";
import user6 from "../img/photo_2022-10-06_12-19-26.jpg";
import dialogs from "../component/main/Dialogs/dialogs";

const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SET_DIALOGS = "SET_DIALOGS"

let initialState = {
    dialogs: [
        {id: 0, name: 'Alex Ivanov', icon: user1, message: "Hello", returnMessages: [{message: "test"}, {message: "test"}]},
        {id: 1, name: 'Mihail Ivanov', icon: user2, message:"Hi", returnMessages: [{message: "Hu"}]},
        {id: 2, name: 'Olga Ivanov', icon: user3, message:"No", returnMessages: [{message: "Hf"}]},
        {id: 3, name: 'Vadim Ivanov', icon: user4, message:"Maybe", returnMessages: [{message: "Ha"}]},
        {id: 4, name: 'Kiril Ivanov', icon: user5, message:"By", returnMessages: [{message: "Ho"}]},
        {id: 5, name: 'Nastya Ivanov', icon: user6, message:"Good!", returnMessages: [{message: "Hi"}]}],
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