import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const useGetUsers = () => {
    //we will make a get request to the server to get the list of all the users
    //we will use fetch to make the request
    //we will get the data in json format
    //we will set the data to the local storage
    //we will set the data to the context
    //if there is an error, we will show the error message

    const [users,setUsers]=useState([])
    const [loading,setloading]=useState(false)

    
    useEffect(()=>
    {
        const getUsers=async()=>
        {
            setloading(true);
            try {
                //credentials include se we are sending the cookie in the request headers
                const res=await fetch("http://localhost:8000/api/users",
                    {
                       credentials:'include' 
                    }
                )

                const data=await res.json()
               
                if(data.error)
                {
                    toast.error(data.error)
                }
                    setUsers(data.filteredUsers)
                    // When the users state is updated with the fetched data,
                    //  React schedules a re-render of the component that uses the useGetUsers hook.
                    //  During the re-render, the component will use the updated users state to render
                    // the UI.
                
            } catch (error) {
                toast.error(error.message)
            }
            finally
            {
                setloading(false)
            }
        }
        //we will call the getUsers function when the component mounts
        getUsers()
    },[]) 

    return {loading,users}
}

// Calling the getUsers function inside the useEffect hook ensures that the data fetching logic runs
// after the component has rendered. This approach is necessary for several reasons:

// Side Effects: 
// The useEffect hook is designed to handle side effects, such as data fetching,
// subscriptions, or manually changing the DOM.
// By placing the getUsers function inside useEffect, 
// you ensure that the data fetching logic is treated as a side effect and runs at the appropriate time in the component lifecycle.

// Component Mounting: When you call the getUsers function inside useEffect, it runs after the component
// mounts.This means the function will execute after the initial render, ensuring that 
// the component is ready to handle the fetched data.

// Dependency Management: The useEffect hook takes a dependency array as its second argument.
//  By including dependencies in this array, you can control when the effect runs. 
// In this case, an empty dependency array ([]) ensures that the getUsers function runs only once when the component mounts.

// Avoiding Infinite Loops: If you call the getUsers function directly inside the component body, it would run on every render,
// potentially causing an infinite loop.
// By placing it inside useEffect, you control its execution and prevent unnecessary re-renders.

export default useGetUsers
