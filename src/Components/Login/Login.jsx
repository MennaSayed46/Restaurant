import React from 'react'
import style from './Login.module.css'
import reservationImg from '../../../public/reservation_bg_2.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function Login () {
 let navigate = useNavigate();
  function submit(){
    navigate('/home')
  
  }
  return (
    <>
      <section className='relative flex md:flex-row flex-col gap-6 w-full login'>
        <div className='relative left w-full'>
          <img src={reservationImg} alt='' className='w-full h-screen' />
        </div>

        <div className='right w-full'>
          <form action='' className='' onSubmit={submit} >
            <p className={`text-center ${style.log} my-12` }>Log in </p>

            {/* email input */}
            <div className='my-4 w-11/12 email'>
              <label htmlFor='email' className='block mb-2'>
               Email Address:
              </label>
              <input
                type='email' required id='email'
                className='border-gray-300 p-3 border rounded-sm focus:ring-2 focus:ring-[] w-11/12 focus:outline-none outline-2'
                placeholder='Enter your email address'
              />
            </div>
            {/* password input */}
            <div className='my-4 w-11/12 password'>
              <label htmlFor='password' className='block mb-2'>
                Password:
              </label>
              <input required
                type='password' id='password'
                className='border-gray-300 p-3 border rounded-sm focus:ring-2 focus:ring-[] w-11/12 focus:outline-none outline-2'
                placeholder='Enter your password'
              />
            </div>

            <div class='flex items-start my-5'>
              <div class='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  class='border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 border rounded focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 w-4 h-4'
                  required
                />
              </div>
              <label
                for='remember'
                className='font-medium text-gray-900 text-sm dark:text-gray-300 ms-2'
              >
                Remember me
              </label>
            </div>
            <button
              type='submit'
              className='bg-[#c59d5f] px-6 py-3 rounded-md' 
            >
              Submit
            </button>
            <Link to={`/register`}> <p className={`${style.dont_have_an_account} my-4`}>Do not have an account ? <span className='text-[#c59d5f] underline'>Sign up</span></p>
            </Link>

          </form>
        </div>
      </section>
    </>
  )
}
