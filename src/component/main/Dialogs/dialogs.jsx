import React from "react";
import style from "./dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import user1 from "./icon/photo_2022-10-06_12-19-26.jpg"
import user2 from "./icon/photo_2022-10-06_12-19-26.jpg"
import user3 from "./icon/photo_2022-10-06_12-19-26.jpg"
import user4 from "./icon/photo_2022-10-06_12-19-26.jpg"
import user5 from "./icon/photo_2022-10-06_12-19-26.jpg"
import user6 from "./icon/photo_2022-10-06_12-19-26.jpg"



// let dialogs = [
//     {id: 1, name: 'Alex Ivanov', icon: user1},
//     {id: 2, name: 'Mihail Ivanov', icon: user2},
//     {id: 3, name: 'Olga Ivanov', icon: user3},
//     {id: 4, name: 'Vadim Ivanov', icon: user4},
//     {id: 5, name: 'Kiril Ivanov', icon: user5},
//     {id: 6, name: 'Nastya Ivanov', icon: user6}]
//
// let messageDialog = [
//     {id: 1, message: 'Hello'},
//     {id: 2, message: 'Hi'},
//     {id: 3, message: 'Hi'},
//     {id: 4, message: 'Hi'}
// ]

const DialogItem = (props) => {
    let path = 'dialogs/' + props.id
    return(
        <div className={style.userBox}>
            <NavLink to={path} className={style.user}>
                <img src={props.icon} alt="№"/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

const Message = (props)=> {
    return(
        <div className={style.message}>
            <p>{props.message}</p>
        </div>
    )
}

const Dialogs = (props)=>{
    let dialogsElements = props.dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} icon={dialog.icon}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <p className={style.description}>Ваши друзья</p>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <p className={style.historyDescription}>Ваши сообщения</p>
                <Routes>
                    <Route path="dialogs/1" element={<Message message="Hi"/>}/>
                    <Route path="dialogs/2" element={<Message message="Hello"/>}/>
                    <Route path="dialogs/3" element={<Message message="How are you"/>}/>
                    <Route path="dialogs/4" element={<Message message="Nice"/>}/>
                    <Route path="dialogs/5" element={<Message message="No ptopblem"/>}/>
                    <Route path="dialogs/6" element={<Message message="No!"/>}/>
                </Routes>
                <textarea name="" id="" cols="10" rows="10">Введиье смс</textarea>
            </div>


        </div>
    )
}

export default Dialogs