import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//define service user a base URL
// to create queries
// instead of using fetch or axios we are making use of fetchQueries within redux toolkit
const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),

    endpoints: (builder) => ({
        //creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),
        // logining in user
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user
            }),
        }),

        //logout
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "POST",
                body: payload
            }),
        }),

        //These endpoints they give us hook like functions that we can use to have access to these endpoints
    }),
});


export const {useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation} = appApi;
export default appApi;

//reduc is a way to manage our state