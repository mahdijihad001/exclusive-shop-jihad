import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./Auth/authSlice";
import authApi from "./Auth/authApi";

const store = configureStore({
    reducer : {
        authUser : authReducer,
        [authApi.reducerPath] : authApi.reducer
    },
    middleware : (defaultMiddleware) =>{
        return defaultMiddleware().concat(authApi.middleware);
    }
});


export default store;