import React from "react";
import logo from "../../Dialogs/icon/photo_2022-10-06_12-19-26.jpg"
import style from "../section.module.css";
import universLogo from "../../../../img/195496.png"
import cityLogo from  "../../../../img/city.png"
import phoneLogo from "../../../../img/phone.png"
import aboutMe from "../../../../img/aboutMe.png"




const Profile = ()=>{
    return(
        <div className={style.mainPage}>
            <img src={logo} alt=""/>
            <div className={style.follows}>
                <div>
                    <p>Following</p>
                    <span>10K</span>
                </div>
                <div>
                    <p>Followers</p>
                    <span>12K</span>
                </div>

            </div>
            <div className={style.contactInfo}>
                <p><img src={aboutMe} alt=""/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non?</p>
                <p><img src={phoneLogo}/> +380687544395</p>
                <p><img src={cityLogo} alt=""/>Ukraine / Kiev</p>
                <p><img src={universLogo}/> "National Technical University of Ukraine
                    "Kyiv Polytechnic Institute named after Igor Sykorsky""</p>
            </div>
            <div>
                <p>Videos</p>
            </div>
        </div>
    )
}

export default Profile