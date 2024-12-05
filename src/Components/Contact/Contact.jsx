import React from 'react'
import style from './Contact.module.css'
import img from '../../../public/breadcumb-bg.jpg'
import { Link } from 'react-router-dom'

export default function Contact () {
  return (
    <>
      <section>
        <div
          className={`${style.mainhome} py-28 flex justify-center items-center flex-col`}
        >
          <p className={`text-white py-6 ${style.contact}`}> Contact</p>
          <p className={`${style.prime} text-white`}>
            <Link to={'/home'}>Home</Link>
            <i className='mx-2 fa-greater-than fa-solid'></i> contact
          </p>
        </div>
      </section>

      <section className='w-full'>
        <div className='flex md:flex-row flex-col gap-6 mx-auto w-4/5 parent'>
          <div className='left bg-[#f3efe2] px-6 w-full'>
            <p className={`${style.contact_inf} text-[#2a2a2a] my-6`}>
              Contact Information
            </p>
            <p className={`${style.para} text-[#5C6574]`}>
              Immerse yourself in a sophisticated and inviting ambiance. The
              carefully curated decor sets the stage for intimate dinners,
              celebrations.
            </p>

            <div className='flex flex-col my-6 icones'>

              <div className='flex md:flex-row gap-2 my-2 card1'>
                <div className='bg-[#fb8507] p-3 rounded-[50%] icon'>
                  <i className='fa-location-crosshairs fa-solid'></i>
                </div>

                <div className="details">
                  <p>Location</p>
                  <p>Riverside 25, San Francisco, California</p>
                </div>
              </div>


              <div className='flex md:flex-row gap-2 my-2 card2'>
                <div className='bg-[#c59d5f] p-3 rounded-[50%] icon'>
                  <i className='fa-envelope fa-solid'></i>
                </div>

                <div className="details">
                  <p>Email Address</p>
                  <p>info@restar.com</p>
                </div>
              </div>


              <div className='flex md:flex-row gap-2 my-2 card3'>
                <div className='bg-[#de5904] p-3 rounded-[50%] icon'>
                  <i className='fa-phone fa-solid'></i>
                </div>

                <div className="details">
                  <p>Phone Number</p>
                  <p>+20 01008228385</p>
                </div>
              </div>






            </div>
          </div>
          <div className='right w-full'>
            <p className={`${style.get} text-[#2a2a2a]`}>Get In Touch</p>
          </div>
        </div>
      </section>
    </>
  )
}
