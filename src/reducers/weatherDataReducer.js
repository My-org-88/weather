import {PUT_WEATHER} from "../actions/getWeatherAction.js";

const defaultState = {
    weather: {country: "", city: "", temp: "", pressure: "", sunset: ""},
    message: {message: "Enter city name"},
};
export const weatherDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_WEATHER: {
            return {...state, ...action.payload}
        }
        default:
            return state;

    }
}