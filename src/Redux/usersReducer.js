import image from "../img/photo_2022-10-06_12-19-26.jpg"
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            following: "1K",
            followers: "1k",
            image: image,
            fullName: 'Vadim Lukichev',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 2,
            followed: true,
            following: "1K",
            followers: "1k",
            image: image,
            fullName: 'Alex',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 3,
            followed: true,
            following: "2K",
            followers: "2k",
            image: image,
            fullName: 'Alex2',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            following: "3K",
            followers: "3k",
            image: image,
            fullName: 'Alex3',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex4',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 5,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex5',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 6,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex6',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 7,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex7',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 8,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex8',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 9,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex9',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex10',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex11',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
        {
            id: 12,
            followed: true,
            following: "10K",
            followers: "12k",
            image: image,
            fullName: 'Alex12',
            phone: "+380508155976",
            university: '"National Technical University of Ukraine "Kyiv Polytechnic Institute named after Igor Sykorsky""',
            status: 'working',
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid deserunt dicta eos, explicabo fuga iusto laboriosam laborum, maiores maxime mollitia omnis recusandae reprehenderit sequi similique, vero voluptas. Ab, non",
            location: {country: 'Ukraine'}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state;
    }
}

export const followCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;