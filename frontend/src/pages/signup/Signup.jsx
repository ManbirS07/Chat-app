import GenderCheckbox from "./gender"
import { useState } from "react"
import useSignup from "c:/Users/jaspa/OneDrive/Desktop/chat_app/Chat-app/frontend/src/hooks/useSignup"
import { redirect } from "react-router-dom"


const Signup = () => {
    //to get the values from the form, we maintain a state input
    const [input, setInput] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    //we will use the custom hook useSignup to handle the signup functionality
    const {signup,loading}=useSignup()

    const onSubmitHandle = async(e) => 
        {
            e.preventDefault() //to prevent the default behaviour of the form i.e. to refresh the page
            await signup(input) //function to send the data to the backend  
             
        } 

    //for gender, we have created a separate component GenderCheckbox so we will use a function as props
    const handleGender=(gender)=>
    {
        setInput({...input,gender:gender})
    }


  return (
    // classname for glassdoor effect
    <div className='mt-2 flex  items-center justify-center mx-auto'> 
    <div className='mt-2 w-96 mx-auto p-3 rounded-lg shadow-md bg-gray-100  backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <p className='text-3xl font-semibold text-center text-gray-100'>
           Signup
            <span className='text-blue-400'> Chatify</span>
        </p>
    <form onSubmit={onSubmitHandle}>
        <div className='mt-1'>
            <label className='label text-white font-semibold font-serif'>Name</label>
            <input type="text" className='w-full px-1 py-1 mt-1 bg-gray-800 rounded-lg ' name='name' required

            value={input.name} 
            onChange={(e) => setInput({...input, name: e.target.value})}
             
             />
        </div>


        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Username</label>
            <input type="text" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='username' required

            value={input.username}
            onChange={(e) => setInput({...input, username: e.target.value})}
            />
        </div>


        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Email</label>
            <input type="email" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='email' required

            value={input.email}
            onChange={(e) => setInput({...input, email: e.target.value})}
            />
        </div>


        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Password</label>
            <input type="password" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='password'  required
            
            value={input.password}
            onChange={(e) => setInput({...input, password: e.target.value})}
            />
        </div>


        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Confirm-password</label>
            <input type="password" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='confirmPassword' required
            
            value={input.confirmPassword}
            onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
            />
        </div>

{/* //we pass the handleGender function as props and selectedGender is the current value of gender field in the input state which is initially empty  */}
        <GenderCheckbox onCheckBoxChange={handleGender} selectedGender={input.gender}>

        </GenderCheckbox>
        <button className='w-full py-2 mt-3 text-lg font-semibold text-white bg-blue-400 rounded-lg' type='submit'
        disabled={loading}>
            {loading?<span className="loading loading-spinner"></span>:'Signup'}
        </button>
    </form>
    </div>
    </div>
  )
}

export default Signup

