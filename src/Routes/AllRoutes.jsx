import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Product from '../Pages/Product';
import Error from '../Pages/Error';
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import AuthProvider from '../Authentication/AuthProvider';
import { PrivateRoute } from './PrivateRoute';
import Profile from '../Pages/PrivatePages/Profile';



const AllRoutes = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/products' element={<Product/>}></Route>
                <Route path='/contact' element={<About/>}></Route>
                <Route path='*' element={<Error/>}></Route>

                {/* Private Route */}
                <Route path='/signin' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/user/profile' element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
            </Route>
        </Routes>    
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AllRoutes