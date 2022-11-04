import React from "react";
import style from "./dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {sendMessageCreator, setDialogsCreator, updateNewMessageCreator} from "../../../Redux/dialogReducer";
import {setAuthUserData} from "../../../Redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


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
                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} icon={dialog.icon}/>)}
            </div>
            <div className={style.messages}>
                <p className={style.historyDescription}>Ваши сообщения</p>
                <Routes>
                    {props.dialogs.map(route => <Route path={"dialogs/" + route.id} element={<Message userId={route.id} btnChange={props.updateNewMessageBody} btnSend={props.sendMessage} messages={route.returnMessages}/>}/>)}
                </Routes>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id) => {
            dispatch(sendMessageCreator(id));
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body))
        },
        setDialogs: (dialogs)=>{
            dispatch(setDialogsCreator(dialogs))
        },
        setAuth:()=>{
            dispatch(setAuthUserData())
        }
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect) (Dialogs)