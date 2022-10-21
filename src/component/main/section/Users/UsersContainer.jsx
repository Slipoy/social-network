import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../../../Redux/usersReducer";


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
                    fullName: 'Alex',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Alex2',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Alex3',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'Alex4',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 5,
                    followed: true,
                    fullName: 'Alex5',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 6,
                    followed: false,
                    fullName: 'Alex6',
                    status: 'working',
                    location: {country: 'Ukraine'}
                },
                {
                    id: 7,
                    followed: true,
                    fullName: 'Alex7',
                    status: 'working',
                    location: {country: 'Ukraine'}
                }
            ])
        }
    }

    render() {
        return (
            <div>
                <Users users={this.props.users}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}/>
            </div>
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