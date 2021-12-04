import { Types } from "../actions/Types";
const initialValue = {
    isLogged: false,
    username: ''
};

export const authenReducer = (state = initialValue, action) => {
    switch (action.type) {
        case Types.AuthenService.LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                username: action.username,
            }
        // return state;
        case Types.AuthenService.LOGOUT:
            return {
                ...state,
                isLogged: false,
                username: ''
            }
        default:
            return state;
    }
}