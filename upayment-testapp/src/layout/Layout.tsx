import React from 'react'
import Header from '../components/header/Header'

const Layout = ({children}:any) => {
  return (
    <div className='px-16 py-8 bg-zinc-300 min-h-screen'>
    <Header></Header>
    {children}
    </div>

  )
}

export default Layout