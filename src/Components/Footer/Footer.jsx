import React from 'react'
import style from './Footer.module.css'
import logo from '../../../public/logo-footer.svg'
import cursor from '../../../public/cursor.png'

export default function Footer () {
  return (
    <>
      <footer
        className={`${style.footer}  w-full inset-x-0  overflow-hidden py-4  ${style.links}`}
      >
        <div className='flex md:flex-row flex-col justify-between gap-x-4 mx-3 w-full'>
          <div className='left flex flex-col items-center w-full'>
            <div className='logo'>
              <img src={logo} alt='footer-logo' />
            </div>
            <p className='text-[#858a91]'>
              We believe that great food shouldn't break the bank. That's why we
              offer affordable options without compromising on taste
            </p>

            <div className='mt-6 hover:cursor-pointer socialMedia'>
              <ul className='flex justify-center items-center gap-x-2'>
                <div className='bg-[#1f1f1f] hover:bg-[#c59d5f] p-3 text-white hover:transition-all hover:duration-500'>
                  <li>
                    <i className='fa-brands fa-facebook-f'></i>
                  </li>
                </div>

                <div className='bg-[#1f1f1f] hover:bg-[#c59d5f] p-3 text-white hover:transition-all hover:duration-500'>
                  <li>
                    <i class='fa-brands fa-x-twitter'></i>
                  </li>
                </div>

                <div className='bg-[#1f1f1f] hover:bg-[#c59d5f] p-3 text-white hover:transition-all hover:duration-500'>
                  <li>
                    <i class='fa-brands fa-instagram'></i>
                  </li>
                </div>

                <div className='bg-[#1f1f1f] hover:bg-[#c59d5f] p-3 text-white hover:transition-all hover:duration-500'>
                  <li>
                    <i class='fa-brands fa-linkedin-in'></i>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className='right flex md:flex-row flex-col gap-x-6 w-full'>
            <div className='left-part flex flex-col justify-start items-center'>
              <div className='logo'>
                <p
                  className={`text-white border-b-2 border-b-[#c59d5f] ${style.title} pb-3  hover:cursor-pointer`}
                >
                  Quick Links
                </p>
              </div>

              <ul className='flex flex-col gap-2 text-[#858a91]  ${style.links} py-4'>
                <li
                  className={`flex items-center gap-2   ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>About us</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Our Chefs</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Company History</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Our Gallery</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Need a Career?</span>
                </li>
              </ul>
            </div>

            <div className='flex flex-col justify-start items-center center-part'>
              <div className='logo'>
                <p
                  className={`text-white border-b-2 border-b-[#c59d5f] ${style.title} pb-3  hover:cursor-pointer`}
                >
                  Food Menus
                </p>
              </div>

              <ul className='flex flex-col gap-2 py-4 text-[#858a91]'>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Redish Oysters</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Crispy Chicken</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Wild Mushroom</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Kozo Sushi Platter</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${style.links} hover:translate-x-[10%] hover:transition-all hover:duration-300 hover:text-[#c59d5f]`}
                >
                  <i className='fa-greater-than fa-solid'></i>
                  <span>Breakfast Platter</span>
                </li>
              </ul>
            </div>

            <div className='right-part flex flex-col justify-start items-center'>
              <div className='logo'>
                <p
                  className={`text-white border-b-2 border-b-[#c59d5f] ${style.title} pb-3  hover:cursor-pointer`}
                >
                  Get In Touch
                </p>
              </div>

              <ul className='flex flex-col gap-2 py-4 text-[#858a91]'>
                <li className={`flex items-start flex-col justify-start  `}>
                  <span className={`pb-2 text-white ${style.address} `}>
                    Address Location
                  </span>
                  <span className=''>
                    <i className='bg-[#c59d5f] mr-1 p-2 rounded-md text-white fa-location-crosshairs fa-solid'></i>
                    Egypt,Giza,Korba
                  </span>
                </li>
                <li className={`flex items-start flex-col justify-start  `}>
                  <span className={`pb-2 text-white ${style.address} `}>
                    Phone Number
                  </span>
                  <span className=''>
                    <i className='bg-[#c59d5f] mr-1 p-2 rounded-md text-white fa-phone-volume fa-solid'></i>
                    +200123456789
                  </span>
                </li>
                <li className={`flex items-start flex-col justify-start  `}>
                  <span className={`pb-2  text-white ${style.address} `}>
                    Email Address
                  </span>
                  <span className='pb-5'>
                    <i className='bg-[#c59d5f] mr-1 p-2 rounded-md text-white fa-phone-volume fa-solid'></i>
                    Restar@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
