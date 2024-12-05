import React, { useEffect } from 'react'
import style from './Home.module.css'
import MainSlider from '../MainSlider/MainSlider'
import FoodSlider from '../FoodSlider/FoodSlider'
import Booking from '../Booking/Booking'

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className=''>
        <MainSlider />
        <FoodSlider />
        <Booking/>
      </div>
    </>
  )
}
