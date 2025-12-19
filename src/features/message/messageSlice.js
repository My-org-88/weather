import {createSlice} from "@reduxjs/toolkit";

const messageSlice=createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        putMessage:(state, action) =>action.payload
    }
})
export default messageSlice.reducer;
export const {putMessage} = messageSlice.actions;