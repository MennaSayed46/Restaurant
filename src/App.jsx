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
import { Toaster } from 'react-hot-toast'
import Regsiter from './Components/Regsiter/Regsiter'
import UserContextProvider from './UserContext/UserContext'


function App() {
  let router= createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
     
      {path:'/home',element:<Home/>},
      {path:'/pages/home',element:<Home/>},
      {path:'/menus/home',element:<Home/>},
      {path:'/contact/home',element:<Home/>},
      {path:'home',element:<Home/>},
      {index:true , element:<Regsiter/>},
      {path:'register' , element:<Regsiter/>},
      {path:'pages' , element:<Pages></Pages>},
      {path:'home' , element:<Home/>},
      {path:'menus' , element:<Menus/>},
      {path:'contact' , element:<Contact/>},
      // {path:'register' , element:<Regsiter/>},

    ]}


  ]);



  return (

    <>
    <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />


    </UserContextProvider>
   
     


    </>
  )
}

export default App
