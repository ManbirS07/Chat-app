import GenderCheckbox from "./gender"

const Signup = () => {
  return (
    // classname for glassdoor effect
    <div className='mt-2 flex  items-center justify-center mx-auto'> 
    <div className='mt-2 w-96 mx-auto p-3 rounded-lg shadow-md bg-gray-100  backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <p className='text-3xl font-semibold text-center text-gray-100'>
           Signup
            <span className='text-blue-400'> Chatify</span>
        </p>
    <form method="POST" action="http://localhost:8000/api/users/login">
        <div className='mt-1'>
            <label className='label text-white font-semibold font-serif'>Name</label>
            <input type="text" className='w-full px-1 py-1 mt-1 bg-gray-800 rounded-lg ' name='name' />
        </div>
        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Username</label>
            <input type="text" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='username' />
        </div>
        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Email</label>
            <input type="email" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='email' />
        </div>
        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Password</label>
            <input type="password" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='password' />
        </div>
        <div className='mt-2'>
            <label className='block text-white font-semibold font-serif'>Confirm-password</label>
            <input type="password" className='w-full px-1 py-1 mt-1  bg-gray-800 rounded-lg' name='confirmPassword' />
        </div>
        <GenderCheckbox></GenderCheckbox>
        <button className='w-full py-2 mt-3 text-lg font-semibold text-white bg-blue-400 rounded-lg' type='submit'>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Signup
