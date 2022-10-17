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
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/state";





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
    let incomingMessage = props.incomingMes.map(incMes => <p>{incMes.message}</p>)
    return(
        <div className={style.message}>
            <div>
                <p>{props.message}</p>
            </div>
            <div>
                {incomingMessage}
            </div>

        </div>
    )
}

const RouteElement = (props)=> {
    return(
        <Routes>
            {props.children}
        </Routes>
    )
}



const Dialogs = (props)=>{
    let state = props.dialogs._state.dialogsPage.dialogs
    console.log(state)
    let dialogsElements = state.map(dialog => <DialogItem name={dialog.name} id={dialog.id} icon={dialog.icon}/>)
    let routeElement = state.map (route => <Route path={"dialogs/" + route.id} element={<Message key={route.id} message={route.message} incomingMes={route.returnMessages}/>}/>)
    let index = props.key
    console.log(index)

    let newMessage = React.createRef()
    let sendMessage = ()=>{
        newMessage.current.value = ""
        props.dispatch(addMessageActionCreator(index))
    }
    let onMessageChange = () => {
        let text = newMessage.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <p className={style.description}>Ваши друзья</p>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <p className={style.historyDescription}>Ваши сообщения</p>
                <RouteElement>
                    {routeElement}
                </RouteElement>
                <textarea onChange={onMessageChange} ref={newMessage}></textarea>
                <button onClick={sendMessage} className={style.sendBtn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs