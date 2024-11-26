import React from 'react'
import style from './Booking.module.css';
import img from '../../../public/booking_1.jpg'


export default function Booking() {
  return (
    <>
    <section className='bg-[#f3efe2] p-6 w-full'>
        <div className="flex md:flex-row flex-col gap-6 mx-auto w-4/5 parent">
            <div className="left w-full">
                <img src={img} alt="Image" className='rounded-md' />
            </div>

            <div className="right w-full">
                <p className={`text-[#c59d5f] ${style.need_booking} py-2`}>Need Booking?</p>
                <p className={`${style.reverse} py-2 text-[#2a2a2a]`}>Reserve Your Personal Table Now!</p>

                <form action="" className='my-3'>

                    <div className='my-3'>
                        <input type="text" required placeholder='Phone number' className='p-2 rounded-md w-full'/>
                    </div>

                    <div className='my-3'>
                        <input type="date" required placeholder='Date & time' className='p-2 rounded-md w-full'/>
                    </div>

                    <div className='my-3'>
                        <input type="text" required placeholder='Total person' className='p-2 rounded-md w-full'/>
                    </div>

                    <button className={`${style.btn} px-3 py-2 rounded-sm my-6  bg-[#c79f62]`}>Reversation now</button>
                </form>


            </div>

        </div>

    </section>
      
    </>
  )
}
