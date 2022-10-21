import React from "react";

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             followed: true,
    //             fullName: 'Alex',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 2,
    //             followed: true,
    //             fullName: 'Alex2',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 3,
    //             followed: true,
    //             fullName: 'Alex3',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 4,
    //             followed: false,
    //             fullName: 'Alex4',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 5,
    //             followed: true,
    //             fullName: 'Alex5',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 6,
    //             followed: false,
    //             fullName: 'Alex6',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         },
    //         {
    //             id: 7,
    //             followed: true,
    //             fullName: 'Alex7',
    //             status: 'working',
    //             location: {country: 'Ukraine'}
    //         }
    //     ]);
    // }
    return (
        <div >
            {props.users.map(user => <div key={user.id}>
                <div>{user.fullName}</div>
                <div>{user.followed}</div>
                <div>{user.status}</div>
                <div>{user.location.country}</div>
                <div>
                    {user.followed
                        ? <button onClick={() => {props.follow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.unfollow(user.id)}}>Follow</button>
                    }

                </div>

            </div>)
            }
        </div>
    )
}

export default Users;