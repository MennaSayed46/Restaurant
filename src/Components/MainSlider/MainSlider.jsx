import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import style from './MainSlider.module.css'
import ball1 from '../../../public/ball_1.svg'
import ball2 from '../../../public/ball_2.svg'
import ball3 from '../../../public/ball_3.svg'
import mainImg1 from '../../../public/hero_3_3.png'
import mainImg2 from '../../../public/hero_3_2.png'
import mainImg3 from '../../../public/hero_3_1.png'
import offer from '../../../public/hero_offer_1.svg'
import shape from '../../../public/hero_shape_3_3.png'
import { Link } from 'react-router-dom'

export default function MainSlider () {
  const [mainImg, setMainImg] = useState(mainImg1)

  const images = [mainImg1, mainImg2, mainImg3]

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImg(prevImg => {
        const currentIndex = images.indexOf(prevImg)
        const nextIndex = (currentIndex + 1) % images.length
        return images[nextIndex]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  

  return (
    <>
      <section className='mainHome'>
        <div className='flex md:flex-row flex-col bg-white w-full min-h-screen parent'>
          <div
            className={`relative left ${style.left} w-full md:w-[60%] md:min-h-screen min-h-screen`}
          >
            <div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 titles'>
              <p className={`${style.mainTitle} `}>Perfection</p>
              <p className={`${style.mainTitle} `}>Food Menu</p>
              <Link to={`/menus`}>
                {' '}
                <div
                  className={`relative ${style.footer} overflow-hidden  rounded-md `}
                >
                  <button
                    className={`bg-[#c79f62] text-white px-10 py-3 rounded-md text-center ${style.btn} w-fit`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>{' '}
                  </button>
                  <button
                    className={`bg-[#2a2a2a] absolute inset-x-0 top-0 px-10 py-3  bottom-0 text-center rounded-md text-white  ${style.anotherBtn}`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className='relative right bg-[#c79f62] py-8 md:py-0 w-full md:w-[40%] min-h-screen md:min-h-screen'>
            <div className='top-0 right-0 absolute flex balls'>
              <img src={ball1} alt='ball1' className='animate ball' />
              <img src={ball2} alt='ball2' className='animate delay-1 ball' />
              <img src={ball3} alt='ball3' className='animate delay-2 ball' />
            </div>

            <div className='md:top-1/2 md:left-1/4 md:absolute pt-36 md:pt-0 md:-translate-y-1/2 md:-translate-x-1/2 mainImg'>
              <div className='relative'>
                <img
                  src={shape}
                  alt='shape-img'
                  className='bottom-[-30%] left-1/4 md:left-2/3 z-0 absolute w-[90%] -translate-x-1/2'
                />

                <img
                  src={mainImg}
                  alt='main-image'
                  className='relative z-10 w-3/4 md:w-full object-cover'
                />

                <img
                  src={offer}
                  alt='offer-img'
                  className='md:block md:bottom-[-20%] z-20 absolute hidden'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
