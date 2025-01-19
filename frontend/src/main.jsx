import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/socketContext.jsx'

createRoot(document.getElementById('root')).render(
    //Now we can access the user data from anywhere in the app without the need of props
    <BrowserRouter>
    <AuthContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
    
)
