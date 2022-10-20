// import user1 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import user2 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import user3 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import user4 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import user5 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import user6 from "../component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
// import postReducer from "./postReducer";
// import dialogsReducer from "./dialogReducer";
// import sidebarReducer from "./sidebarReducer";
//
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts:
//                 [
//                     {id: 1, message: 'first message', likeCount: 2},
//                     {id: 2, message: '2 message', likeCount: 20},
//                     {id: 3, message: '3 message', likeCount: 12},
//                     {id: 4, message: '4 message', likeCount: 22},
//                     {id: 5, message: 'sfdsshdfjdf message', likeCount: 5},
//                     {id: 6, message: '6 message', likeCount: 2}
//                 ],
//             newPostText : ""
//         },
//         dialogsPage: {
//             dialogs:
//                 [
//                     {
//                         id: 0,
//                         name: 'Alex Ivanov',
//                         icon: user1,
//                         message: "Hello",
//                         returnMessages:
//                             [{
//                                 message: "Hi"
//                             }
//                             ],
//                     },
//                     {id: 2, name: 'Mihail Ivanov', icon: user2, message:"Hi", returnMessages: [{id:1, message: "Hu"}]},
//                     {id: 3, name: 'Olga Ivanov', icon: user3, message:"No", returnMessages: [{id:2, message: "Hf"}]},
//                     {id: 4, name: 'Vadim Ivanov', icon: user4, message:"Maybe", returnMessages: [{id:3, message: "Ha"}]},
//                     {id: 5, name: 'Kiril Ivanov', icon: user5, message:"By", returnMessages: [{id:4, message: "Ho"}]},
//                     {id: 6, name: 'Nastya Ivanov', icon: user6, message:"Good!", returnMessages: [{id:5, message: "Hi"}]}],
//             newMessageBody: ""
//         },
//         videosPage: {}
//     },
//     _callSubscriber() {
//         console.log('change state');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = postReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._callSubscriber(this._state);
//
//     }
//
// }
// export default store