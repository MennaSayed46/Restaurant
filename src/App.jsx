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
import ProtectRoute from './Components/ProtectRoute/ProtectRoute'

function App() {
  let router= createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
     
      {path:'/home',element:<Home/>},
      {path:'/pages/home',element:<ProtectRoute><Home/></ProtectRoute>},
      {path:'/menus/home',element:<ProtectRoute><Home/></ProtectRoute>},
      {path:'/contact/home',element:<ProtectRoute><Home/></ProtectRoute>},
      {path:'home',element:<ProtectRoute><Home/></ProtectRoute>},
      {index:true , element:<Regsiter/>},
      {path:'register' , element:<Regsiter/>},
      {path:'pages' , element:<ProtectRoute><Pages/></ProtectRoute>},
      {path:'home' , element:<ProtectRoute><Home/></ProtectRoute>},
      {path:'menus' , element:<ProtectRoute><Menus/></ProtectRoute>},
      {path:'contact' , element:<ProtectRoute><Contact/></ProtectRoute>},
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
