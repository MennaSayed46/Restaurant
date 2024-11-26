import React from 'react'
import style from './Home.module.css'
import MainSlider from '../MainSlider/MainSlider'
import FoodSlider from '../FoodSlider/FoodSlider'
import Booking from '../Booking/Booking'

export default function Home () {
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
