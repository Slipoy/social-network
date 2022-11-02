import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../../Redux/usersReducer";
import style from "./users.module.css";
import image from "../../../../img/photo_2022-10-06_12-19-26.jpg"


class UserContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.users.length === 0){
            this.props.setUsers([
                {
                    id: 1,
                    followed: true,
                    image: image,
                    fullName: 'Alex',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 2,
                    followed: true,
                    image: image,
                    fullName: 'Alex2',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 3,
                    followed: true,
                    image: image,
                    fullName: 'Alex3',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 4,
                    followed: false,
                    image: image,
                    fullName: 'Alex4',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 5,
                    followed: true,
                    image: image,
                    fullName: 'Alex5',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 6,
                    followed: false,
                    image: image,
                    fullName: 'Alex6',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 7,
                    followed: true,
                    image: image,
                    fullName: 'Alex7',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 8,
                    followed: true,
                    image: image,
                    fullName: 'Alex8',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 9,
                    followed: true,
                    image: image,
                    fullName: 'Alex9',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 710,
                    followed: true,
                    image: image,
                    fullName: 'Alex10',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 11,
                    followed: true,
                    image: image,
                    fullName: 'Alex11',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 12,
                    followed: true,
                    image: image,
                    fullName: 'Alex12',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
            ])
        }
    }

    render() {
        return (
                <Users users={this.props.users}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (UserContainer)