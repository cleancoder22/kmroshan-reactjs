import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex bg-white justify-between px-6 py-2 rounded-xl shadow-sm">
            <Link className='font-medium text-[20px] italic ' to="/">UPayments store</Link>
            <h1 className='font-medium text-[22px]'>Register</h1>
        </nav>
  )
}

export default Header