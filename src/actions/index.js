import { Types } from "./Types";

export const actLoginSuccess = (user) => {
    return {
        type: Types.AuthenService.LOGIN_SUCCESS,
        username: user
    }
}
export const actLogout = () => {
    return {
        type: Types.AuthenService.LOGOUT,
    }
}