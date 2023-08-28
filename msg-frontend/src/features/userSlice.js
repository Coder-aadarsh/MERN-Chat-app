//state management for the user
import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    //reducers are going to be functions that will change user state
    reducers: {
        addNotifications: (state, {payload}) => {},
        resetNotifications: (state, {payload}) =>{},
    },

    // these extra reduces will help not only change state but also - do other things like eg - save
    extraReducers: (builder) =>{
        //save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload);

        //save after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, {payload})=> payload);

        //logout: destroy user session
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, ()=> null);
    }
});


export const {addNotifications, resetNotifications} = userSlice.actions; // here actions are coming from reducers - addnoti, etc... -> func that change state are called actions
export default userSlice.reducer;
