


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
        },
        dialogsPage: {
            dialogs:
                [
                    {id: 1, name: 'Alex'},
                    {id: 2, name: 'Alex1'},
                    {id: 3, name: 'Alex2'},
                    {id: 4, name: 'Alex3'},
                    {id: 5, name: 'Alex4'},
                    {id: 6, name: 'Alex5'}
                ],
            messages:
                [
                    {id: 1, message: 'Hello'},
                    {id: 2, message: 'Hi'},
                    {id: 3, message: 'Hi'},
                    {id: 4, message: 'Hi'}
                ]
        },
        videosPage: {}
    },
    // _callSubscriber() {
    //     console.log('change state');
    // },
    // getState() {
    //     return this._state;
    // },
    // subscribe(observer) {
    //     this._callSubscriber = observer;
    // },
    // // addPost() {
    // //     // let newPost = {
    // //     //     id: 5,
    // //     //     message: this._state.profilePage.newPostText,
    // //     //     likeCount: 10
    // //     // }
    // //     // this._state.profilePage.newPostText = '';
    // //     // this._state.profilePage.posts.push(newPost);
    // //     // this._callSubscriber(this._state);
    // // },
    // // updateNewPostText() {
    // //     // this._state.profilePage.newPostText = newText;
    // // },
    // dispatch(action) {
    //     if (action.type === ADD_POST) {
    //         let newPost = {
    //             id: 5,
    //             message: this._state.profilePage.newPostText,
    //             likeCount: 10
    //         }
    //         this._state.profilePage.newPostText = '';
    //         this._state.profilePage.posts.push(newPost);
    //         this._callSubscriber(this._state);
    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._state.profilePage.newPostText = action.newText;
    //         this._callSubscriber(this._state);
    //     }
    // }

}

export default store