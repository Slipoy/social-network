import React from "react";
import Posts from "./Posts/posts";
import Profile from "./profile/profile";
import {connect} from "react-redux";

import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


const Section = ()=>{
    return (
        <section>
            <Profile/>
            <Posts/>
        </section>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps),withAuthRedirect) (Section)