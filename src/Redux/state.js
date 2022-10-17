import user1 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user2 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user3 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user4 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user5 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user6 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";


let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, message: 'first message', likeCount: 2},
                    {id: 2, message: '2 message', likeCount: 20},
                    {id: 3, message: '3 message', likeCount: 12},
                    {id: 4, message: '4 message', likeCount: 22},
                    {id: 5, message: 'sfdsshdfjdf message', likeCount: 5},
                    {id: 6, message: '6 message', likeCount: 2}
                ],
            newPostText : ""
        },
        dialogsPage: {
            dialogs:
                [
                    {
                        id: 0,
                        name: 'Alex Ivanov',
                        icon: user1,
                        message: "Hello",
                        returnMessages:
                            [{
                                message: "Hi"
                            }
                            ],
                    },
                    {id: 2, name: 'Mihail Ivanov', icon: user2, message:"Hi", returnMessages: [{id:1, message: "Hu"}]},
                    {id: 3, name: 'Olga Ivanov', icon: user3, message:"No", returnMessages: [{id:2, message: "Hf"}]},
                    {id: 4, name: 'Vadim Ivanov', icon: user4, message:"Maybe", returnMessages: [{id:3, message: "Ha"}]},
                    {id: 5, name: 'Kiril Ivanov', icon: user5, message:"By", returnMessages: [{id:4, message: "Ho"}]},
                    {id: 6, name: 'Nastya Ivanov', icon: user6, message:"Good!", returnMessages: [{id:5, message: "Hi"}]}],
            newMessage: ""
        },
        videosPage: {}
    },
    _callSubscriber() {
        console.log('change state');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        // let newPost = {
        //     id: 5,
        //     message: this._state.profilePage.newPostText,
        //     likeCount: 10
        // }
        // this._state.profilePage.newPostText = '';
        // this._state.profilePage.posts.push(newPost);
        // this._callSubscriber(this._state);
    },
    updateNewPostText() {
        // this._state.profilePage.newPostText = newText;
    },
    dispatch(action) {
        if (action.type === "ADD_POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 10
            }
            this._state.profilePage.newPostText = '';
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === "ADD_MESSAGE"){
            let newMessage = {
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.newMessage = "";
            this._state.dialogsPage.dialogs[0].returnMessages.push(newMessage)
            this._callSubscriber(this._state);
        }else if(action.type === "UPDATE_NEW_MESSAGE_TEXT"){
            this._state.dialogsPage.newMessage = action.newTextMessage;
            this._callSubscriber(this._state);
        }
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
export const addMessageActionCreator = (index)=>{
    return{
        type: "ADD_MESSAGE",
    }
}
export const updateNewMessageTextActionCreator = (text)=>{
    return{
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newTextMessage: text
    }
}

export default store