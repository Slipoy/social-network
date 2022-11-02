const SET_USER_DATA = "SET+USER_DATA"

let initialState = {
    isAuth: false
};


const authUserReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state, isAuth: true
            }
        default: return state
    }
}

export const setAuthUserData = ()=> {
    return{
        type: SET_USER_DATA
    }
}

export default authUserReducer;