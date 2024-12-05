import React, { useEffect } from 'react';
import style from './Pages.module.css'
import Reservation from '../Reservation/Reservation';

export default function Pages() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Reservation/>
      
    </>
  )
}
