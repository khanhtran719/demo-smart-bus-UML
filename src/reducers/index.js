import { combineReducers } from "redux";
import { authenReducer } from "./AuthenReducer";

 export const appReducer = combineReducers({
     User: authenReducer
 });