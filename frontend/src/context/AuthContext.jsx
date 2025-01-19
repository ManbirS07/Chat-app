//creating a context for the user which will be used to check if the user is logged in or not
import { createContext, useContext } from 'react';
import { useState } from 'react'


export const AuthContext=createContext()

export const useAuthContext=()=>
    {
       return useContext(AuthContext)
    }

export const AuthContextProvider=({children})=>
{
    //From the local storage,we will get the data in string format so we parse it to convert it to JSON format
    const [AuthUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("new-user"))||null)
   
    return (
        //we will wrap the children with the AuthContext provider so that
        //we can access the user data from anywhere in the app
        <AuthContext.Provider value={{AuthUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}