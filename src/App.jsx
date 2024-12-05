import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Pages from './Components/Pages/Pages'
import Menus from './Components/Menus/Menus'
import Contact from './Components/Contact/Contact'
import Shop from './Components/Shop/Shop'
import Blog from './Components/Blog/Blog'
import { Toaster } from 'react-hot-toast'

function App() {
  let router= createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
      {path:'home',element:<Home/>},
      {index:true , element:<Home/>},
      {path:'pages' , element:<Pages/>},
      {path:'menus' , element:<Menus/>},
      {path:'contact' , element:<Contact/>},
      {path:'shop' , element:<Shop/>},
      {path:'blog' , element:<Blog/>},
    ]}


  ]);



  return (

    <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
     


    </>
  )
}

export default App
