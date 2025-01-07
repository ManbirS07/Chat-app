import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

//custom hook to handle the signup functionality
const useSignup = () => 
{
    const [loading,setloading]=useState(false)
    const {AuthUser,setAuthUser}=useAuthContext()

    //destructuring the input object to get the values
    const signup=async({name,username,email,password,confirmPassword,gender})=>
    {
        const success=handleErrors({name,username,email,password,confirmPassword,gender})
        if(!success) return;

        //if all the fields are filled, we will send the data to the backend and set the loading to true
        setloading(true)
        try {
            //we will post the data to the backend api endpoint /signup using fetch
            const res=await fetch("http://localhost:8000/api/auth/signup",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({name,username,email,password,confirmPassword,gender}) //sending the data in json format
                }
            )
            const data=await res.json() //getting the response in json format
            //setting the user to local storage so that the user remains logged in even after refreshing the page
            localStorage.setItem("new-user",JSON.stringify(data))

            //creating a context so that whenever user logs in, we can access the user data from anywhere in the app
            //and redirect the user to the home page
            
            //setting the user data to the context which we added above in the local storage
            setAuthUser(data)


            if(data.error)
            {
                toast.error(data.error)
            }
            else
            {
                toast.success('Signup successful')
                console.log(data)
            }

        } catch (error) {
            toast.error('Something went wrong')
        }
        finally{
            setloading(false) //after the data is sent, we will set the loading to false
        }
}

return {signup,loading}

}

export default useSignup

//function to handle the validations of the input fields
function handleErrors({name,username,email,password,confirmPassword,gender})
{
    if(name==='' || username==='' || email==='' || password==='' || confirmPassword==''||!gender)
    {
        toast.error('All fields are required')
        return false
    }

    if(password!==confirmPassword)
    {
        toast.error('Passwords do not match')
        return false
    }
    if(password.length<6)
    {
        toast.error('Password should be atleast 6 characters long')
        return false
    }
    return true
}

