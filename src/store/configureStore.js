import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";


const initialState = {
 weather: { country: "", city: "", temp: "", pressure: "", sunset: "" },
 message: { message: "Enter city name" },
};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
