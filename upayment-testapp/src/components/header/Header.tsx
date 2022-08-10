import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
const navigate = useNavigate()
  const handleClickHome=()=>{
    if(location.pathname === '/'){
      window.location.reload()
    }else{
navigate("/")
    }
  }
  return (
    <nav className="flex bg-white justify-between px-6 py-2 rounded-xl shadow-sm">
            <h1 onClick={handleClickHome} className='font-medium text-[20px] italic cursor-pointer' >UPayments store</h1>
            <h1 className='font-medium text-[22px]'>Register</h1>
        </nav>
  )
}

export default Header