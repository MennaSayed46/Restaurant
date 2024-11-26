import React, { useState } from 'react';
import style from './Navbar.module.css';
import logo from '../../../public/logo-white.svg';
import { Link } from 'react-router-dom';
// import { to } from './../../../node_modules/rollup/dist/es/shared/node-entry';

export default function Navbar() {
  
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='top-0 z-30 fixed inset-x-0 justify-center md:justify-around border-2 mt-0 p-0 w-screen'>
        <ul className='flex justify-between bg-[#111111]'>
          <div className="flex justify-center items-center bg-[#c59d5f] w-full md:w-2/12 icone">
            <img src={logo} alt="logo-image" />
          </div>

          <div className="lg:flex justify-center items-center gap-x-5 hidden bg-[#111111] mx-2 w-10/12 text-white listItems">
            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/'}> Home{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Home' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Home' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Pages')}
              onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to={'/pages'}>  Pages{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Pages' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Pages' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Menus')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/menus'}>  Menus{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Menus' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Menus' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Shop')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/shop'}>  Shop{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Shop' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Shop' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Blog')}
              onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to={'/blog'}>  Blog{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Blog' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Blog' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Contact')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={'/contact'}>Contact{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Contact' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Contact' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>
          </div>


          <div className="flex justify-center items-center bg-[#111111] w-3/12">
            <div className="lg:flex items-center hidden">
              <p className='border-white hover:border-[#c59d5f] hover:bg-[#c59d5f] p-2 border rounded-[50%] hover:transition-all hover:duration-500'>
                <i className="text-white fa-cart-shopping fa-solid"></i>
              </p>
              <span className="border-[#858a91] mx-2 border-r h-8"></span>
            </div>
            <div className="lg:flex flex-col justify-center items-center hidden">
              <p className='text-white hover:text-[#c59d5f] hover:transition-all hover:duration-500'><i class="mx-1 text-white text-xl fa-phone-volume fa-solid"></i>+20 01119121377</p>
              <p className='text-[#858a91]'>Contact us for reversation</p>

            </div>
            <button onClick={toggleMenu} className="flex lg:hidden mx-3 text-white">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>


        </ul>
      </nav>

    
      {isMenuOpen && (
        <div className="top-0 right-0 z-40 fixed bg-[#111111] w-1/2 h-full">
      
          <button onClick={toggleMenu} className="top-4 right-4 absolute text-2xl text-white">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <ul className="flex flex-col items-center mt-14 text-white">
          <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/'}> Home{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Home' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Home' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Pages')}
              onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to={'/pages'}>  Pages{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Pages' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Pages' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Menus')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/menus'}>  Menus{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Menus' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Menus' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Shop')}
              onMouseLeave={() => setHoveredItem(null)}
            >
             <Link to={'/shop'}>  Shop{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Shop' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Shop' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Blog')}
              onMouseLeave={() => setHoveredItem(null)}
            >
            <Link to={'/blog'}>  Blog{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Blog' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Blog' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <li
              className="mx-3 my-2 hover:text-[#c59d5f] transition-all duration-300"
              onMouseEnter={() => setHoveredItem('Contact')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={'/contact'}>Contact{' '}
              <i
                className={`fa-solid ${hoveredItem === 'Contact' ? 'fa-minus' : 'fa-plus'
                  } transition-transform duration-300 ${hoveredItem === 'Contact' ? 'rotate-180' : 'rotate-0'
                  }`}
              ></i></Link>
            </li>

            <div className="flex items-center mt-12">
              <p className='border-white hover:border-[#c59d5f] hover:bg-[#c59d5f] p-2 border rounded-[50%] hover:transition-all hover:duration-500'>
                <i className="text-white fa-cart-shopping fa-solid"></i>
              </p>
              <span className="border-[#858a91] mx-2 border-r h-8"></span>
            </div>
            <div className="">
              <p className='text-white hover:text-[#c59d5f] hover:transition-all hover:duration-500'><i class="mx-1 text-white text-xl fa-phone-volume fa-solid"></i>+20 01119121377</p>
              <p className='text-[#858a91]'>Contact us for reversation</p>

            </div>

        
          </ul>
          
        </div>
      )}
    </>
  );
}
