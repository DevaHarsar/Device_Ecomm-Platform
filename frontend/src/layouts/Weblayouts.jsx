import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar'
const Weblayouts = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Weblayouts