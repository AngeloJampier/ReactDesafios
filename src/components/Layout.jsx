import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NabBar'
const divFix = {
  width: '100%',
  height: '68px'
}
const Layout = () => {
  return (
    <>
        <NavBar></NavBar>
        <div style={divFix}></div>
        <Outlet></Outlet>
    </>
  )
}

export default Layout