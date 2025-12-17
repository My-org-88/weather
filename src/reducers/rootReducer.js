import {combineReducers} from "redux";
import {weatherDataReducer} from "./weatherDataReducer.js";
import {messageReducer} from "./messageReducer.js";

export const rootReducer = combineReducers({
    weather: weatherDataReducer,
    message: messageReducer
})