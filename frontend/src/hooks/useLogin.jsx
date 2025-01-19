
import toast from 'react-hot-toast'
import {useAuthContext} from '../context/AuthContext'
import {useState} from 'react'

export const useLogin = () => {
    const [loading,setloading]=useState(false)
    const {setAuthUser}=useAuthContext()
    const login = async({username,password}) => 
    {
        setloading(true)
        //first we will make a post request to the server to login the user and check if the user is valid or not
        try {
            const res=await fetch("http://localhost:8000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password}), //sending the data in json format
                credentials:'include' //to send the cookies along with the request
            })
            const data=await res.json() //getting the response in json format

            if(data.error)
            {
                toast.error(data.error)
            }
            //incase of successful login, we will get the name,username,email,profilePicUrl of the user
            //if the user is valid and exists in the database, we will set the user data to the local storage
            else
            {
                
                localStorage.setItem("new-user",JSON.stringify(
                    {
                        time:new Date(),
                        data
            }))
                setAuthUser(data)
                toast.success('Login successful')
        }
        } catch (error) 
        {
            toast.error('Something went wrong')
        }
        finally
        {
            setloading(false) //after the data is sent, we will set the loading to false
        }
    }
  return (
    {loading,login}
  )
}

