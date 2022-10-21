import React from "react";
import style from "./dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router-dom";


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
    let messageText = React.createRef()
    return(
        <div >
            <div>
                {props.messages.map(mes => <p className={style.message}>{mes.message}</p>)}
            </div>
            <div>
                <textarea ref={messageText} onChange={()=>{props.btnChange(messageText.current.value)}}></textarea>
                <button onClick={()=>{messageText.current.value = ""; props.btnSend(props.userId)}} className={style.sendBtn}>Send</button>
            </div>

        </div>
    )
}

const Dialogs = (props)=>{
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <p className={style.description}>Ваши друзья</p>
                {props.users.map(dialog => <DialogItem name={dialog.name} id={dialog.id} icon={dialog.icon}/>)}
            </div>
            <div className={style.messages}>
                <p className={style.historyDescription}>Ваши сообщения</p>
                <Routes>
                    {props.users.map(route => <Route path={"dialogs/" + route.id} element={<Message userId={route.id} btnChange={props.messageChange} btnSend={props.send} messages={route.returnMessages}/>}/>)}
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs