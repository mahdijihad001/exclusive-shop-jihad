import { createSlice } from "@reduxjs/toolkit";

const getUserFormLocalStorage = () =>{
    try {
        const getUserForm = localStorage.getItem("user");

        if(getUserForm === null){
            return {user : null}
        };

        return {
            user : JSON.parse(getUserForm)
        }

    } catch (error) {
        return {user : null}
    }
}


const initialState = getUserFormLocalStorage();

const authSlice = createSlice({
    name : "AuthClice",
    initialState,
    reducers : {
        setUser : (state , action) =>{
            state.user = action.payload.user;
            localStorage.setItem("user" , JSON.stringify(state.user));
        },
        logOutUser : (state) =>{
            state.user = null,
            localStorage.removeItem("user")
        }
    }
});

export const {setUser , logOutUser} = authSlice.actions;

export default authSlice.reducer