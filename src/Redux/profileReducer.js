const SET_PROFILE = "SET_PROFILE"

let initialState = {
    usersProfile : []
}


const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_PROFILE:{
            return {...state, usersProfile: [...action.users]}
        }
        default: return state

    }
}
export const setUsersProfile = (users)=>{
    return{
        type: SET_PROFILE,
        users
    }
}
export default profileReducer