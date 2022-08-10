import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex w-full rounded-xl bottom-0 left-0 right-0 bg-white px-6 py-2">
    <Link className='font-medium text-[20px] m-auto italic' to="/">UPayments store</Link>
    </footer>
  )
}

export default Footer