import React from 'react'
import style from './Menu.module.css'
import title from '../../../public/title_icon.svg'
import dish1 from '../../../public/product_1_13.png'
import dish2 from '../../../public/product_1_11.png'
import dish3 from '../../../public/product_1_10.png'
import dish4 from '../../../public/product_1_8.png'
import dish5 from '../../../public/product_1_4-150x150.png'
import dish6 from '../../../public/product_1_12-150x150.png'
import dish7 from '../../../public/product_1_14.png'
import dish8 from '../../../public/product_1_9.png'
import dish9 from '../../../public/product_1_3-150x150.png'
import dish10 from '../../../public/product_1_5-150x150.png'

export default function Menu () {
  return (
    <>
      <section className={`w-full ${style.menu}`}>
        <div className='mx-auto w-4/5'>
          <div className='flex about'>
            <img src={title} alt='title-img' className='mx-2' />
            <p className={` text-[#c59d5f] ${style.our_menu} py-3`}>OUR MENU</p>
          </div>

          <p className={`${style.our_restaurant} py-2 text-[#2a2a2a]`}>
            Our Restaurant Foods Menu
          </p>
        </div>
        <div className='flex md:flex-row flex-col gap-12 mx-auto w-4/5 parent'>
          <div className='left'>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1}`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish1}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Breakfast Platter</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$20</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card2`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish2}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Butter Pasta</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$18</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card3`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish3}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Grilled Chicken</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$20</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card4`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish4}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Chicken with Rice</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$30</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card5`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish5}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Raw Salmon Salad</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$18</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card6`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish6}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Vegetable Salad</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$20</p>
                </div>
              </div>
            </div>
          </div>

          <div className='right'>
            <div
              className={`flex flex-colmd:flex-row gap-3 card7 my-2 ${style.card1}`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish7}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Kozo Sushi Platter</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$20</p>
                </div>
              </div>
            </div>


            <div
              className={`flex flex-colmd:flex-row gap-3 card8 my-2 ${style.card1} card2`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish8}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Chicken Leg Piece</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$25</p>
                </div>
              </div>
            </div>


            <div
              className={`flex flex-colmd:flex-row gap-3 card9 my-2 ${style.card1} `}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish4}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Chicken with Rice</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$30</p>
                </div>
              </div>
            </div>


            <div
              className={`flex flex-colmd:flex-row gap-3 card10 my-2 ${style.card1} `}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish9}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Salmon Salad</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$22</p>
                </div>
              </div>
            </div>



            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card5`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish5}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Raw Salmon Salad</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$18</p>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-colmd:flex-row gap-3 card1 my-2 ${style.card1} card6`}
            >
              <div
                className={`relative w-[100px] h-[100px] ${style.img_container}`}
              >
                <img
                  src={dish10}
                  alt=''
                  className='rounded-[50%] w-full h-full object-cover'
                />
                <div className='top-0 left-0 absolute flex justify-center items-center bg-[#c59d5f] opacity-0 rounded-[50%] w-full h-full transition-opacity duration-300'>
                  <i className='text-3xl text-white fa-cart-shopping fa-solid'></i>
                </div>
              </div>

              <div className='card_details'>
                <p className={`${style.name}`}>Salmon Beef Stack</p>
                <div
                  className={`flex justify-between gap-20  ${style.details}`}
                >
                  <p>The registration fee covers access</p>
                  <p>$20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
