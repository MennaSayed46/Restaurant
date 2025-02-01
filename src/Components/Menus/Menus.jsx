import React, { useEffect, useState } from 'react'
import style from './Menus.module.css'
import { Link } from 'react-router-dom'

//images

import brune_image from '../../../public/menu_card_7.jpg'
import chicha_image from '../../../public/menu_card_1.jpg'
import oysters_image from '../../../public/menu_card_2.jpg'
import crispy_image from '../../../public/menu_card_4.jpg'
import redish_image from '../../../public/menu_card_8.jpg'
import testy_roll_image from '../../../public/menu_card_6.jpg'
import vanilla_cake_image from '../../../public/menu_card_5.jpg'
import wild_mushroom_image from '../../../public/menu_card_3.jpg'
import Booking from '../Booking/Booking'

export default function Menus () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // State to manage active tab
  const [activeTab, setActiveTab] = useState('all_foods')

  // Tab data
  const tabs = [
    { id: 'all_foods', label: 'All Foods' },
    { id: 'desert', label: 'Desert' },
    { id: 'snack', label: 'Snack' },
    { id: 'supper', label: 'Supper' }
  ]

  return (
    <>
      <section className=''>
        <div
          className={`${style.mainhome} py-28 flex justify-center items-center flex-col`}
        >
          <p className={`text-white py-6 ${style.food_menu}`}>Food Menus</p>
          <p className={`${style.prime} text-white`}>
            <Link to={'home'}>Home</Link>
            <i className='mx-2 fa-greater-than fa-solid'></i> Menus
          </p>
        </div>
      </section>

      <section className='my-6'>
        {/* Navigation Tabs */}
        <ul className='flex flex-wrap justify-center items-center border-b font-medium text-center'>
          {tabs.map(tab => (
            <li key={tab.id} className='me-2'>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block p-4 rounded-t-lg bg-transparent text-black hover:border-b-2 hover:border-b-[#c59d5f]  ${
                  activeTab === tab.id ? ' text-amber-600 ' : ''
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Contents */}
        <div className='p-4'>
          {/* all_foods */}

          <div
            className={`${
              activeTab === 'all_foods' ? '' : 'hidden'
            } flex flex-col justify-center items-center w-full gap-10`}
          >
            {/* first_row */}
            <div className='flex md:flex-row flex-col justify-center items-center gap-4 mx-auto w-4/5 first_row'>
              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Bruno Scribble
                </span>
                <img
                  src={brune_image}
                  alt='bruno image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Chicha Morada
                </span>
                <img
                  src={chicha_image}
                  alt='chicha image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$29</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Crispy Chicken
                </span>
                <img
                  src={crispy_image}
                  alt='crispy image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$30</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Oysters Dozen
                </span>
                <img
                  src={oysters_image}
                  alt='oysters image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$50</p>
                </div>
              </div>
            </div>

            {/* sec row */}
            <div className='flex md:flex-row flex-col justify-center items-center gap-4 mx-auto w-4/5 sec_row'>
              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Redish Oysters
                </span>
                <img
                  src={redish_image}
                  alt='redish image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Testy Roll
                </span>
                <img
                  src={testy_roll_image}
                  alt='testy roll image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md vanilla group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Vanilla Cake
                </span>
                <img
                  src={vanilla_cake_image}
                  alt='Vanilla Cake image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md wildMashrrom group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Wild Mushroom
                </span>
                <img
                  src={wild_mushroom_image}
                  alt='Wild Mushroom image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$30</p>
                </div>
              </div>
            </div>
          </div>

          {/* desert */}
          <div
            className={`${
              activeTab === 'desert' ? '' : 'hidden'
            } flex flex-col justify-center items-center w-full gap-10`}
          >
            <div className='flex md:flex-row flex-col justify-center items-center gap-4 mx-auto w-4/5 first_row'>
              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Bruno Scribble
                </span>
                <img
                  src={brune_image}
                  alt='bruno image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md vanilla group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Vanilla Cake
                </span>
                <img
                  src={vanilla_cake_image}
                  alt='Vanilla Cake image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Testy Roll
                </span>
                <img
                  src={testy_roll_image}
                  alt='testy roll image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Redish Oysters
                </span>
                <img
                  src={redish_image}
                  alt='redish image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>
            </div>
          </div>

          {/* snack */}
          <div
            className={`${
              activeTab === 'snack' ? '' : 'hidden'
            } flex flex-col justify-center items-center w-full gap-10`}
          >
            <div className='flex md:flex-row flex-col justify-center items-center gap-4 mx-auto w-4/5 first_row'>
              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Bruno Scribble
                </span>
                <img
                  src={brune_image}
                  alt='bruno image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Oysters Dozen
                </span>
                <img
                  src={oysters_image}
                  alt='oysters image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$50</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Testy Roll
                </span>
                <img
                  src={testy_roll_image}
                  alt='testy roll image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md redish group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Redish Oysters
                </span>
                <img
                  src={redish_image}
                  alt='redish image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$24</p>
                </div>
              </div>
            </div>
          </div>

          {/* supper */}
          <div
            className={`${
              activeTab === 'supper' ? '' : 'hidden'
            } flex flex-col justify-center items-center w-full gap-10`}
          >
            <div className='flex md:flex-row flex-col justify-center items-center gap-4 mx-auto w-4/5 first_row'>
              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Chicha Morada
                </span>
                <img
                  src={chicha_image}
                  alt='chicha image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$29</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md bruno group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Crispy Chicken
                </span>
                <img
                  src={crispy_image}
                  alt='crispy image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$30</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md vanilla group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Vanilla Cake
                </span>
                <img
                  src={vanilla_cake_image}
                  alt='Vanilla Cake image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$20</p>
                </div>
              </div>

              <div
                className={`relative flex flex-col justify-center items-center border-2 border-gray-400 p-4 rounded-md wildMashrrom group ${style.food}`}
              >
                <span className={`${style.name_of_food} my-3 relative z-1`}>
                  Wild Mushroom
                </span>
                <img
                  src={wild_mushroom_image}
                  alt='Wild Mushroom image'
                  className='group-hover:scale-110 group-hover:contrast-125 rounded-md transition-all group-hover:duration-300'
                />
                <p className={`py-3 ${style.registeration}`}>
                  The registration fee covers
                </p>

                <div className='group-hover:bg-[#fa8507] bottom-[-15px] absolute pritems-center bg-black p-2 rounded-[50%] text-white transition-all group-hover:duration-300'>
                  <p className=''>$30</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </section>



      <Booking/>
    </>
  )
}
