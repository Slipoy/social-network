import React from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageCreator} from "../../../Redux/dialogReducer";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer