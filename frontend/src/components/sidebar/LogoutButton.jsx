import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useLogout } from '../../hooks/useLogout';

const LogoutButton = () => {
  const {Logout}=useLogout()

  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
      onClick={Logout}/>
    </div>
  )
}

export default LogoutButton
