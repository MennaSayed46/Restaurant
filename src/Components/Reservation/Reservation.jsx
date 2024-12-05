import React from 'react'
import style from './Reservation.module.css'
import img from '../../../public/breadcumb-bg.jpg'
import reservationImg from '../../../public/reservation_bg_2.jpg'
import title from '../../../public/title_icon2.svg'
import lineImg from '../../../public/line_1.svg'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

export default function Reservation () {

  function handleRegister(){
    toast("Reservation is done . and we will get in touch with as soon as possible .");
  }
  return (
    <>
      <section className=''>
        <div
          className={`${style.mainhome} py-28 flex justify-center items-center flex-col`}
        >
          <p className={`text-white py-6 ${style.reservation}`}> Reservation</p>
          <p className={`${style.prime} text-white`}>
            <Link to={'home'}>Home</Link>
            <i className='mx-2 fa-greater-than fa-solid'></i> contact
          </p>
        </div>
      </section>

      <section className='my-6 w-full reservation'>
        <div className='mx-auto w-full parent'>
          <div className='flex flex-col justify-center items-center gap-3 py-6 titles'>
            <div className='flex gap-1'>
              <img src={title} alt='title-img' />
              <p className={`${style.reservationTitle} text-[#fa8507]`}>
                Reservation
              </p>
            </div>

            <p className={`${style.make_a_reservation}`}>Make A Reservation</p>
            <img src={lineImg} alt='line image' />
          </div>

          <div className={`${style.reservationForm} w-full py-16`}>
            <div className='flex flex-col bg-[#f3efe2] mx-auto py-16 w-3/5'>
              <div action=''>
                <p
                  className={`${style.bookTable} py-4 flex flex-col justify-center items-center`}
                >
                  Book A Table
                </p>

                <div className='my-2 name'>
                  <label htmlFor='name'></label>
                  <div className='flex flex-row justify-between bg-white mx-6 p-3 rounded-md'>
                    <input 
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Full Name'
                      className='border-none w-full outline-none'
                    ></input>
                    <i class='text-[#bcbbbb] text-xl fa-solid fa-user-tie'></i>
                  </div>
                </div>

                <div className='my-2 phoneNumber'>
                  <label htmlFor='phoneNumber'></label>
                  <div className='flex flex-row justify-between bg-white mx-6 p-3 rounded-md'>
                    <input 
                      type='text'
                      id='phoneNumber'
                      name='phoneNumber'
                      placeholder='Phone Number'
                      className='border-none w-full outline-none'
                    ></input>
                    <i class='text-[#bcbbbb] text-xl fa-phone fa-solid'></i>
                  </div>
                </div>

                <div className='my-2 emailAddress'>
                  <label htmlFor='emailAddress'></label>
                  <div className='flex flex-row justify-between bg-white mx-6 p-3 rounded-md'>
                    <input 
                      type='text'
                      id='emailAddress'
                      name='emailAddress'
                      placeholder='Email Address'
                      className='border-none w-full outline-none'
                    ></input>
                    <i class='text-[#bcbbbb] text-xl fa-envelope fa-solid'></i>
                  </div>
                </div>

                <div className='flex md:flex-row flex-col gap-1'>
                  <div className='my-2 w-full date'>
                    <label htmlFor='emailAddress'></label>
                    <div className='flex flex-row justify-between bg-white mx-6 p-3 rounded-md'>
                      <input 
                        type='date'
                        id='date'
                        name='date'
                        placeholder='Date'
                        className='border-none w-full outline-none'
                      ></input>
                    </div>
                  </div>

                  <div className='my-2 w-full time'>
                    <label htmlFor='emailAddress'></label>
                    <div className='flex flex-row justify-between bg-white mx-6 p-3 rounded-md'>
                      <input 
                        type='time'
                        id='time'
                        name='time'
                        placeholder='Time'
                        className='border-none w-full outline-none'
                      ></input>
                    </div>
                  </div>
                </div>

                <div className='bg-white mx-6 p-3 rounded-md'>
                  <textarea
                    name='message'
                    id='message'
                    className='border-none w-full outline-none'
                    placeholder='Write special quest ...'
                  ></textarea>
                </div>

                <div className='mx-6 p-3 rounded-md w-full'>
                <button className={`${style.btn}  rounded-sm my-6  bg-[#c79f62]`} onClick={handleRegister}>Reversation now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
