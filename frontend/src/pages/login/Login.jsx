import React from 'react'

const Login = () => {
  return (
    // classname for glassdoor effect
    <div className='flex flex-col items-center justify-center min-w-56 mx-auto'> 
    <div className='w-300 p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-100'>
            Login
            {/* <span className='text-blue-400'> Chatify</span> */}
        </h1>

    <form method="POST" action="http://localhost:8000/api/users/login" className='mt-6'>
        <div className='mt-6'>
            <label className='block text-white font-semibold font-serif'>Username</label>
            <input type="text" className='w-full px-4 py-2 mt-2 bg-gray-800 rounded-lg' name='username' />
        </div>
        <div className='mt-4'>
            <label className='block text-white font-semibold font-serif'>Password</label>
            <input type="password" className='w-full px-4 py-2 mt-2  bg-gray-800 rounded-lg' name='password' />
        </div>
        <br></br>
        <a  className='block text-white font-semibold'>Don't have an account?
            <br></br><button className='w-20 py-2 mt-2 text-base font-semibold text-white bg-blue-600 rounded-lg'  type='submit'>Signup</button>
        </a>
        <button className='w-full py-2 mt-6 text-lg font-semibold text-white bg-blue-400 rounded-lg' type='submit'>Login</button>
    </form>
    </div>
    </div>
  )
}

export default Login
