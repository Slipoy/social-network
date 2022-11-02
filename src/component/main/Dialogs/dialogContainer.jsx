import React from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, setDialogsCreator, updateNewMessageCreator} from "../../../Redux/dialogReducer";
import user1 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import user2 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import user3 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import user4 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import user5 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import user6 from "../../../img/photo_2022-10-06_12-19-26.jpg";
import dialogs from "./dialogs";

class DialogContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.dialogs.length === 0){
            this.props.setDialogs([
                {id: 0, name: 'Alex Ivanov', icon: user1, message: "Hello", returnMessages: [{message: "test"}, {message: "test"}]},
                {id: 1, name: 'Mihail Ivanov', icon: user2, message:"Hi", returnMessages: [{message: "Hu"}]},
                {id: 2, name: 'Olga Ivanov', icon: user3, message:"No", returnMessages: [{message: "Hf"}]},
                {id: 3, name: 'Vadim Ivanov', icon: user4, message:"Maybe", returnMessages: [{message: "Ha"}]},
                {id: 4, name: 'Kiril Ivanov', icon: user5, message:"By", returnMessages: [{message: "Ho"}]},
                {id: 5, name: 'Nastya Ivanov', icon: user6, message:"Good!", returnMessages: [{message: "Hi"}]}])
        }
    }
    render() {
        return(
            <Dialogs users={this.props.dialogs}
            messageChange={this.props.updateNewMessageBody}
            send={this.props.sendMessage}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs
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
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (DialogContainer)
export default DialogsContainer