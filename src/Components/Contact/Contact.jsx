import React from 'react';
import style from './Contact.module.css';
import img from '../../../public/breadcumb-bg.jpg';
import { Link } from 'react-router-dom';
import map from '../../../public/map.svg'

export default function Contact () {
  return (
    <>
      {/* main section */}
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
      {/* middle section */}
      <section className='py-6 w-full'>
        <div className='flex md:flex-row flex-col gap-10 mx-auto w-4/5 parent'>
          {/* left section */}
          <div className='left bg-[#f3efe2] px-6 py-4 w-full'>
            <p className={`${style.contact_inf} text-[#2a2a2a] my-6`}>
              Contact Information
            </p>
            <p className={`${style.para} text-[#5C6574]`}>
              Immerse yourself in a sophisticated and inviting ambiance. The
              carefully curated decor sets the stage for intimate dinners,
              celebrations.
            </p>

            {/* //icones of location , phone, email address */}
            <div className='flex flex-col my-6 icones'>
            <div className='flex md:flex-row gap-2 my-2 card1'>
                <div className='bg-[#c59d5f] p-3 rounded-[50%] icon'>
                  <i className='fa-location fa-solid'></i>
                </div>

                <div className='details'>
                  <p>Location</p>
                  <p>Egypt,Giza,Korba</p>
                </div>
              </div>

              <div className='flex md:flex-row gap-2 my-2 card2'>
                <div className='bg-[#c59d5f] p-3 rounded-[50%] icon'>
                  <i className='fa-envelope fa-solid'></i>
                </div>

                <div className='details'>
                  <p>Email Address</p>
                  <p>info@restar.com</p>
                </div>
              </div>

              <div className='flex md:flex-row gap-2 my-2 card3'>
                <div className='bg-[#de5904] p-3 rounded-[50%] icon'>
                  <i className='fa-phone fa-solid'></i>
                </div>

                <div className='details'>
                  <p>Phone Number</p>
                  <p>+20 01119121377</p>
                </div>
              </div>
            </div>

            {/* icones of social media like :facebook , insta , pinterest  */}
            <div className='flex flex-row justify-center items-center gap-2 social_media'>
              {/* facebook */}
              <div className='bg-white hover:bg-[#fb8507] p-3 rounded-sm transition-all hover:duration-300 facebook'>
                <i class='text-xl fa-brands fa-facebook-f'></i>
              </div>

              {/* twitter */}
              <div className='bg-white hover:bg-[#fb8507] p-3 rounded-sm transition-all hover:duration-300 facebook'>
                <i class='text-xl fa-brands fa-twitter'></i>
              </div>

              {/* insta */}
              <div className='bg-white hover:bg-[#fb8507] p-3 rounded-sm transition-all hover:duration-300 facebook'>
                <i class='text-xl fa-brands fa-instagram'></i>
              </div>

              {/* linkedin */}
              <div className='bg-white hover:bg-[#fb8507] p-3 rounded-sm transition-all hover:duration-300 facebook'>
                <i class='text-xl fa-brands fa-linkedin'></i>
              </div>

              {/* pinterest */}
              <div className='bg-white hover:bg-[#fb8507] p-3 rounded-sm transition-all hover:duration-300 facebook'>
                <i class='text-xl fa-brands fa-pinterest'></i>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className='right py-4 w-full'>
            <p className={`${style.get} text-[#2a2a2a]`}>Get In Touch</p>

            <form action='' className='py-4'>
              <div className='flex md:flex-row flex-col gap-4 w-full'>
                {/* name input */}
                <div className='flex flex-row justify-between items-center bg-[#f8f8f8] md:my-2 p-3 w-full name'>
                  <input
                    type='text'
                    required
                    placeholder='Full Name'
                    className='bg-transparent border-none outline-none'
                  />
                  <i className='fa-regular fa-user'></i>
                </div>
                {/* email address input  */}
                <div className='flex flex-row justify-between items-center bg-[#f8f8f8] my-0 md:my-2 p-3 w-full email_address'>
                  <input
                    type='email'
                    required
                    placeholder='Email Address'
                    className='bg-transparent border-none outline-none'
                  />
                  <i className='fa-envelope fa-regular'></i>
                </div>
              </div>
              {/* phone input */}
              <div className='flex flex-row justify-between items-center bg-[#f8f8f8] my-2 md:my-2 p-3 w-full phone_number'>
                <input
                  type='text'
                  required
                  placeholder='Phone Number'
                  className='bg-transparent border-none outline-none'
                />
                <i className='fa-phone fa-solid'></i>
              </div>

              <textarea
                name=''
                id=''
                className='bg-[#f8f8f8] my-0d:my-2 px-3 py-6 border-none w-full text-area m outline-none'
                placeholder='Type appointment note'
              ></textarea>

              <button className='bg-[#fb8507] my-4 p-3 w-full'>
                Send message now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* map section */}
      <section className='my-6 w-full map'>
        <div className='flex flex-col justify-center items-center mx-auto w-4/5'>
        <p className={`${style.visit_our_store} text-center my-2`}>Visit Our Store in the Spot on the Map Below</p>
        <p className={`text-[#5C6574] ${style.see_our_store} text-center`}>See our store in every city on the spot and spen your good day there. See you soon!</p>
        <img src={map} alt="map-image" className='my-4' />
        
        
        </div>

      </section>

    </>
  )
}
