import React from 'react';
import style from './ProtectRoute.module.css'
import { Navigate } from 'react-router-dom';

export default function ProtectRoute({children}) {
  if(localStorage.getItem('loadingSpinner')){
    return children;
  }else{
   return <Navigate to={'/register'}></Navigate>
  }
  return (
    <>

    </>
  )
}
