const SET_USER_DATA = "SET+USER_DATA"
const OUT_USER = "OUT_USER"

let initialState = {
    isAuth: false
};


const authUserReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_USER_DATA:
            if (action.data.login === "qwerty" && action.data.password === "qwerty"){
                return {
                    ...state, isAuth: true
                }
            }
        case OUT_USER:
            return {
                ...state,
                isAuth: false
            }

        default: return state
    }
}

export const setAuthUserData = (login, password)=> {
    return{
        type: SET_USER_DATA,
        data: {login, password}
    }
}
export const setAuthUserOut = ()=>{
    return{
        type: OUT_USER
    }
}

export default authUserReducer;