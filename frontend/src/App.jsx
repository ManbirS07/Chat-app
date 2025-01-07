import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import {  Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'


function App() {
  const {AuthUser}=useAuthContext()
  const navigate=useNavigate()

// Navigate to home page if AuthUser is not null
// The navigate function is used inside the useEffect hook to perform navigation based on the state of AuthUser.
//  The useEffect hook ensures that the navigation logic runs after the component has rendered
//  and when the AuthUser state changes. This is important for redirecting users based on their authentication status.

// Here's a step-by-step explanation:

// Initial Render: When the App component first renders, the useEffect hook runs after the initial render.
//  It checks if AuthUser is not null.

// State Change: If the AuthUser state changes (e.g., a user logs in or logs out), 
//  useEffect hook runs again because AuthUser is included in the dependency array.

// Conditional Navigation: Inside the useEffect hook, if AuthUser is not null, the navigate function is called to redirect the user to the home page ('/').

// This ensures that the user is redirected to the home page whenever they are authenticated.
  useEffect(() => {
    if (AuthUser) 
    {
      navigate('/')
    }
  }, [AuthUser])
 
  return (
    
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={AuthUser ? <Home /> : <Navigate to="/login" />} />
      <Route path='/login' element={AuthUser?<Navigate to="/"/>:<Login/>} />
      {/* if the user is not logged in, we will redirect the user to the login page */}
      <Route path='/signup' element={AuthUser?<Navigate to="/"/>:<Signup></Signup>} />
      </Routes>
      
      {/*toast notification i.e a small popup that appears on the screen incase of an error */}
      <Toaster></Toaster>
    </div>
  )
}

export default App
