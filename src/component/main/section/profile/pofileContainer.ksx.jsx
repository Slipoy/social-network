import React from "react";
import {setUsersProfile} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import image from "../../../../img/photo_2022-10-06_12-19-26.jpg";
import Profile from "./profile";



class ProfileContainer extends React.Component{
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let userId = this.props.router;
        console.log(userId)
        if (this.props.usersProfile.length === 0){
            this.props.setUsersProfile([{
                id: 1,
                followed: true,
                following: "10K",
                followers: "12k",
                fullName: 'Vadim Lukichev',
                phone: "+380508155976",
                university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
                status: 'working',
                aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
                location: {
                    country: 'Ukraine',
                    city: "Kiev"}
            }])
        }
    }
    render() {
        return(
            <Profile users={this.props.usersProfile}/>

        )
    }
}

let mapStateToProps = (state) =>{
    return{
        usersProfile: state.profilePage.usersProfile,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        setUsersProfile: (users) => {
            dispatch(setUsersProfile(users));
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(ProfileContainer)
