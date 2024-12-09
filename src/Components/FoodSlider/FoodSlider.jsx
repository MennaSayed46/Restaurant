import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import style from './FoodSlider.module.css'
import category1 from '../../../public/category_box_1.png'
import category2 from '../../../public/category_box_2.png'
import category3 from '../../../public/category_box_3.png'
import category4 from '../../../public/category_box_4.png'
import category5 from '../../../public/category_box_5.png'
import category6 from '../../../public/category_box_6.png'
import burger from '../../../public/cta_bg_21.jpg'
import pizza from '../../../public/cta_bg_22.jpg'
import hero from '../../../public/hero_3_3.png'
import shape from '../../../public/hero_shape_3_3.png'
import title from '../../../public/title_icon.svg'
import aboutFeature from '../../../public/about_feature_1.svg'
import aboutFeature2 from '../../../public/about_feature_2.svg'
import aboutFeatureCard1 from '../../../public/feature_card_1.svg'
import aboutFeatureCard2 from '../../../public/feature_card_2.svg'
import aboutFeatureCard3 from '../../../public/feature_card_3.svg'
import kababImg from '../../../public/cta_1.png'
import Delivery from '../Delivery/Delivery'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

export default function FoodSlider () {
  const [translateY, setTranslateY] = useState(0)
  const [rotation, setRotation] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setRotation(scrollPosition * 0.2)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <main className='bg-[#f3efe2] py-12'>
        <div className='overflow-hidden'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className='mySwiper'
            style={{ width: '100%' }}
          >
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category1}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>Beef Noodles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category2}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>Beef Noodles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category3}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>Biryani</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category4}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>
                  Chicken Pasta
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category5}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>Shrimp Soup</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-[#f7f6f2] p-4 rounded-xl slider'>
                <img
                  src={category6}
                  alt='image-category'
                  className='rounded-t-xl w-full h-auto object-cover'
                />
                <p className={`py-3 text-center ${style.food}`}>Fried Rice</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* section of offers for pizza and burgers */}
        <section className='flex md:flex-row flex-col gap-4 mx-auto py-12 w-4/5'>
          <div className={`left ${style.burger} relative w-full rounded-md`}>
            {/* //burger */}
            <div className='flex flex-col justify-center mx-6 py-12 titles'>
              <p className={`delicious text-[#c59d5f] py-3  `}>Delicious</p>
              <p className={`hum-burger py-3 `}>HUM BURGER</p>
              <p className={`limite-offer text-[#c59d5f] py-3  `}>
                Limited Offer
              </p>
              <Link to={`/menus`}>
                {' '}
                <div
                  className={`relative ${style.footer} overflow-hidden rounded-md w-fit footer  `}
                >
                  <button
                    className={`bg-[#c79f62] text-white px-10 py-3 rounded-md text-center ${style.btn} btn`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>{' '}
                  </button>

                  <button
                    className={`bg-[#2a2a2a] absolute inset-x-0 top-0 px-10 py-3  bottom-0 text-center rounded-md text-white  ${style.anotherBtn} anotherBtn`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>
                  </button>
                </div>
              </Link>
            </div>

            <div className='top-5 right-5 absolute flex-col animate offer-burger'>
              <p className={`only  `}>Only </p>
              <p className={`price text-white`}>$5 </p>
            </div>
          </div>

          <div className={`right ${style.pizza} relative w-full rounded-md`}>
            {/* //pizza */}
            <div className='flex flex-col justify-center mx-6 py-12 titles'>
              <p className={`delicious text-[#c59d5f] py-3  `}>Delicious</p>
              <p className={`hum-burger py-3 `}>Italian Pizza</p>
              <p className={`limite-offer text-[#c59d5f] py-3  `}>
                Limited Offer
              </p>
              <Link to={`/menus`}>
                {' '}
                <div
                  className={`relative ${style.footer} overflow-hidden rounded-md w-fit footer  `}
                >
                  <button
                    className={`bg-[#c79f62] text-white px-10 py-3 rounded-md text-center ${style.btn} btn`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>{' '}
                  </button>

                  <button
                    className={`bg-[#2a2a2a] absolute inset-x-0 top-0 px-10 py-3  bottom-0 text-center rounded-md text-white  ${style.anotherBtn} anotherBtn`}
                  >
                    Order Now <i className='fa-angles-right fa-solid'></i>
                  </button>
                </div>
              </Link>
            </div>

            <div className='top-5 right-5 absolute flex-col animate jus offer-burger'>
              <p className={`only  `}>Only </p>
              <p className={`price text-white`}>$8 </p>
            </div>
          </div>
        </section>
      </main>

      {/* about our food */}
      <section className='bg-white my-6 py-12 w-full overflow-hidden'>
        <div className='flex md:flex-row flex-col gap-6 mx-auto w-4/5 parent'>
          <div className='left w-full'>
            <div className='relative rounded img'>
              <img
                src={hero}
                alt='hero-img'
                className='relative z-10 bg-[#c59d5f] p-16 rounded-[50%]'
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <img
                src={shape}
                alt='shape-img'
                className='sm:block top-0 left-[-50%] z-0 absolute hidden w-full h-full animate object-cover'
              />
            </div>
          </div>

          <div className='right w-full'>
            <div className='flex about'>
              <img src={title} alt='title-img' className='mx-2' />
              <p className={`${style.about} text-[#c59d5f]`}>About our food</p>
            </div>
            <p className={`${style.fineArt} text-[#2a2a2a] py-3`}>
              The Fine Art of Restar's Food Services
            </p>
            <p className={`${style.details} py-2`}>
              Indulge in a gourmet journey with a menu that showcases a fusion
              of flavors. Our chefs use the finest ingredients to create dishes
              that are not just meals but unforgettable experiences.
            </p>

            <div className='flex md:flex-row flex-col gap-4 my-4 p-3 border-t-2 border-t-gray'>
              <div className='left flex gap-2 p-2 border-r-2 border-r-gray'>
                <img
                  src={aboutFeature}
                  alt='about-feature-burger-img '
                  className='transition-all duration-200 hover:scale-110'
                />
                <div>
                  <p className={`${style.aboutTitle} text-[#2a2a2a] py-2`}>
                    Best Quality Food
                  </p>
                  <p className={`${style.detailsOfAbout}`}>
                    The carefully curated décor sets the stage
                  </p>
                </div>
              </div>

              <div className='right flex gap-2 p-2'>
                <img
                  src={aboutFeature2}
                  alt='about-feature-burger-img'
                  className='transition-all duration-200 hover:scale-110'
                />
                <div>
                  <p className={`${style.aboutTitle} text-[#2a2a2a] py-2`}>
                    Qualified Chef
                  </p>
                  <p className={`${style.detailsOfAbout}`}>
                    Define the concept and theme of your food.
                  </p>
                </div>
              </div>
            </div>
            <Link to={`/pages`}>
              <button className='border-[#2a2a2a] border-2 px-4 py-2 rounded'>
                Book A Table
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* discount &&original recipes && fast server on table  */}
      <section className={`w-full ${style.discountParent} py-12`}>
        <div className={`flex md:flex-row flex-col mx-auto w-4/5 py-12 `}>
          <div className='left flex gap-x-3 group'>
            <div className='flex justify-center items-start bg-[#1f1f1f] p-6 rounded-[50%] icone'>
              <img
                src={aboutFeatureCard1}
                alt=''
                className='group-hover:rotate-45 transition-all duration-75'
              />
            </div>
            <div className='details'>
              <p className={`text-white ${style.discount} py-2`}>
                Discount Voucher
              </p>
              <p className={`${style.detailsOfDiscount}`}>
                Authoritatively transition unique portals before.
              </p>
            </div>
          </div>

          <div className='flex gap-x-3 center group'>
            <div className='flex justify-center items-start bg-[#1f1f1f] p-6 rounded-[50%] icone'>
              <img
                src={aboutFeatureCard2}
                alt=''
                className='group-hover:rotate-45'
              />
            </div>
            <div className='details'>
              <p className={`text-white ${style.discount} py-2`}>
                Original Recipes
              </p>
              <p className={`${style.detailsOfDiscount}`}>
                Authoritatively transition unique portals before.
              </p>
            </div>
          </div>
          <div className='right flex gap-x-3 group'>
            <div className='flex justify-center items-start bg-[#1f1f1f] p-6 rounded-[50%] icone'>
              <img
                src={aboutFeatureCard3}
                alt=''
                className='group-hover:rotate-45'
              />
            </div>
            <div className='details'>
              <p className={`text-white ${style.discount} py-2`}>
                Fast Serve On Table{' '}
              </p>
              <p className={`${style.detailsOfDiscount}`}>
                Authoritatively transition unique portals before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* kabab section offer */}
      <section className='py-4 w-full gradient'>
        <div className='flex md:flex-row flex-col justify-center items-center mx-auto py-6 w-4/5 parent'>
          <div className='left'>
            <p className={` text-[#c59d5f] py-2 ${style.disc}`}>
              Get 30% Discount
            </p>
            <p className={`${style.grill} text-white py-2`}>
              Grill Chicken Stick
            </p>
            <p className={`${style.disc} text-white py-2`}>Limited Offer</p>
            <Link to={`/menus`}>
              {' '}
              <div
                className={`relative ${style.footer} overflow-hidden rounded-md w-fit footer my-6  `}
              >
                <button
                  className={`bg-[#c79f62] text-white px-10 py-3 rounded-md text-center ${style.btn} btn`}
                >
                  Order Now <i className='fa-angles-right fa-solid'></i>{' '}
                </button>

                <button
                  className={`bg-[#2a2a2a] absolute inset-x-0 top-0 px-10 py-3  bottom-0 text-center rounded-md text-white  ${style.anotherBtn} anotherBtn`}
                >
                  Order Now <i className='fa-angles-right fa-solid'></i>
                </button>
              </div>
            </Link>
            <img
              src={shape}
              alt='shapeImg'
              className='w-1/2 animate object-cover'
            />
          </div>

          <div className='relative right'>
            <img src={kababImg} alt='' className='' />
            <div className='right-5 bottom-5 absolute flex-col animate offer-burger'>
              <p className={`only  `}>Only </p>
              <p className={`price text-white`}>$5 </p>
            </div>
          </div>
        </div>
      </section>

      <Delivery />
      <Menu />
    </>
  )
}
