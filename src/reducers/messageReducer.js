import {PUT_MESSAGE} from "../actions/getMessage.js";

const defaultState = {
    message: 'Enter city name'
};

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_MESSAGE:
            return {
                ...state, message: action.payload
            }
        default:
            return state;
    }
}