import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import Footer from '../Layouts/Footer/Footer'
import { Outlet } from 'react-router'
import Container from '../Components/Common/Container'


const Layout = () => {
  return (
    <div>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>

  )
}

export default Layout