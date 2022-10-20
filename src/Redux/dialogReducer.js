import user1 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user2 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user3 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user4 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user5 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user6 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import dialogs from "../component/main/Dialogs/dialogs";

const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    dialogs:
        [
            {id: 0, name: 'Alex Ivanov', icon: user1, message: "Hello", returnMessages: [{message: "Hi"}]},
            {id: 2, name: 'Mihail Ivanov', icon: user2, message:"Hi", returnMessages: [{id:1, message: "Hu"}]},
            {id: 3, name: 'Olga Ivanov', icon: user3, message:"No", returnMessages: [{id:2, message: "Hf"}]},
            {id: 4, name: 'Vadim Ivanov', icon: user4, message:"Maybe", returnMessages: [{id:3, message: "Ha"}]},
            {id: 5, name: 'Kiril Ivanov', icon: user5, message:"By", returnMessages: [{id:4, message: "Ho"}]},
            {id: 6, name: 'Nastya Ivanov', icon: user6, message:"Good!", returnMessages: [{id:5, message: "Hi"}]}],
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
            let body = {
                id:0,
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody: ""

            }
        default: return state
    }
}

export const updateNewMessageCreator = (text)=>{
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
export const sendMessageCreator = ()=>{
    return{
        type: SEND_MESSAGE,
    }
}
export default dialogsReducer