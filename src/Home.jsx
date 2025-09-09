import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar />
      <Outlet />
      
    </div>
  )
}

export default Home
