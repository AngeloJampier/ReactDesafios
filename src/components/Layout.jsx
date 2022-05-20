import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NabBar'

const Layout = () => {
  return (
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </>
  )
}

export default Layout