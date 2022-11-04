import React from "react";
import logo from "../../../../img/photo_2022-10-06_12-19-26.jpg"
import style from "../section.module.css";
import universLogo from "../../../../img/195496.png"
import cityLogo from  "../../../../img/city.png"
import phoneLogo from "../../../../img/phone.png"
import aboutMe from "../../../../img/aboutMe.png"
import {connect} from "react-redux";
import {withRouter} from "../../../../hoc/withRouter";
import {compose} from "redux";
import {setAuthUserData} from "../../../../Redux/authReducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";




const Profile = (props)=>{
    let userID = props.router.params.userId;
    let currentUser = props.users.find(user => user.id == userID)
    return(
        <div className={style.mainPage}>
            <div>
                <p>{currentUser.fullName}</p>
                <img src={logo} alt=""/>
            <div className={style.follows}>
                <div>
                    <p>Following</p>
                    <span>{currentUser.followers}</span>
                </div>
                <div>
                    <p>Followers</p>
                    <span>{currentUser.following}</span>
                </div>
            </div>
            <div className={style.contactInfo}>
                <p><img src={aboutMe} alt=""/>{currentUser.aboutMe}</p>
                <p><img src={phoneLogo}/>{currentUser.phone}</p>
                <p><img src={cityLogo} alt=""/>{currentUser.city}</p>
                <p><img src={universLogo}/>{currentUser.university}</p>
            </div>
            <div>
                <p>Videos</p>
            </div></div>

        </div>

    )
}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        users: state.usersPage.users
    }
}
export default compose(connect(mapStateToProps, {setAuthUserData}), withRouter)(Profile)