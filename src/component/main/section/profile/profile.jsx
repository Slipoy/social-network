import React from "react";
import logo from "../../../../img/photo_2022-10-06_12-19-26.jpg"
import style from "../section.module.css";
import universLogo from "../../../../img/195496.png"
import cityLogo from  "../../../../img/city.png"
import phoneLogo from "../../../../img/phone.png"
import aboutMe from "../../../../img/aboutMe.png"



const Profile = (props)=>{
    console.log(props)
    return(
        <div className={style.mainPage}>{props.users.map(user=><div><img src={logo} alt=""/>
            <div className={style.follows}>
                <div>
                    <p>Following</p>
                    <span>{user.followers}</span>
                </div>
                <div>
                    <p>Followers</p>
                    <span>{user.following}</span>
                </div>
            </div>
            <div className={style.contactInfo}>
                <p><img src={aboutMe} alt=""/>{user.aboutMe}</p>
                <p><img src={phoneLogo}/>{user.phone}</p>
                <p><img src={cityLogo} alt=""/>{user.city}</p>
                <p><img src={universLogo}/>{user.university}</p>
            </div>
            <div>
                <p>Videos</p>
            </div></div> )}

        </div>

    )
}

export default Profile