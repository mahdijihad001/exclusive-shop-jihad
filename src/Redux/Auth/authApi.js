import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseUrl from "../../Components/Utils/BaseUrl";

const authApi = createApi({
    reducerPath : "AuthApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${BaseUrl()}/user`,
        credentials : "include"
    }),
    tagTypes : ["User"],
    endpoints : (builder) =>({
        logInUser : builder.mutation({
            query : (logInData) =>({
                url : `/login`,
                method : "POST",
                body : logInData
            })
        }),
        registerUser : builder.mutation({
            query : (registerData) =>({
                url : `register`,
                method : "POST",
                body : registerData
            })
        }),
        logOutuser : builder.mutation({
            query : () =>({
                url : `/logOut`,
                method : "POST"
            })
        })
    })
});


export const {useLogInUserMutation , useLogOutuserMutation , useRegisterUserMutation} = authApi;

export default authApi