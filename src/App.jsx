import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter,Routes,Route, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Users from './Pages/Users/Users'
import Product from './Pages/Product/Product'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/footer/Footer'
import Menu from './Components/menu/Menu'
import Login from './Pages/login/Login'
import './styles/global.scss'

function App() {

// kise page main footer dalna hot ahy ar kise mi ni to nichy wali technique use krli miny Layout wali

 const Layout = ()=>{
  return(
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
 }

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
      {
        path:'/users',
        element:<Users/>

      },
      {
        path:'/products',
        element:<Product/>

      },
    ]
  },
  {
    path:"/login",
    element:<Login/>,
  }
])

  return (
    <>


<RouterProvider router={router}/>

    </>
  )
}

export default App