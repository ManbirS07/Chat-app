import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

export const useLogout = () => {
    const {setAuthUser}=useAuthContext()
    const Logout=async()=>
    {
        try {
            const res=await fetch("http://localhost:8000/api/auth/logout",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    credentials: 'include',
                })
            const data=await res.json()
            if(data.error)
            {
                toast.error(data.error)
            }
            else
            {
                //remove user from local storage and set the Authuser state to null
                setAuthUser(null)
                localStorage.removeItem("new-user")
                toast.success(data.message)
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    return {Logout}
}

