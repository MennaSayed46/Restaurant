import React from 'react'
import style from './Home.module.css'
import MainSlider from '../MainSlider/MainSlider'
import FoodSlider from '../FoodSlider/FoodSlider'

export default function Home () {
  return (
    <>
      <div className=''>
        <MainSlider />
        <FoodSlider />
      </div>
    </>
  )
}
