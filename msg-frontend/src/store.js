import {configureStore} from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import appApi from './services/appApi';

//persist out store - so that even if you refresh your page you don't have to re-login and it stays 

import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";

// redux-thunk -> help in having asynchronous request - signing up , etc
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blackList: [appApi.reducerPath],
};

//persist our store

const persistedReducer = persistReducer(persistConfig, reducer);

//creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;


//we have build our store now we just need to integrate it with our app
