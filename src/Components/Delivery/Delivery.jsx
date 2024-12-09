import React, { useEffect, useRef, useState } from 'react';
import style from './Delivery.module.css';
import delivery_img from '../../../public/delivery_1.png';
import { Link } from 'react-router-dom';

export default function Delivery() {
  const sectionRef = useRef(null); 
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className="bg-[#f7f6f2] p-6 delivery"
        ref={sectionRef} 
      >
        <div className="flex md:flex-row flex-col mx-auto w-4/5 parent">
          <div className="left w-full">
            <p className={`text-[#c59d5f] ${style.food_delivery} py-3`}>
              FOOD DELIVERY
            </p>
            <p className={`text-[#2a2a2a] ${style.good_food} py-2`}>
              Where Good Food Meets Fast Delivery
            </p>
            <p className={`${style.details} py-2`}>
              Indulge in a gourmet journey with a menu that showcases a fusion
              of flavors. Our chefs use the finest ingredients to create dishes
              that are not just meals but unforgettable experiences.
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <div>
                <div className="bg-white rounded-md w-full">
                  <p className={`m-2 p-4 ${style.btn}`}>
                    {' '}
                    <i className="fa-check-to-slot mx-1 p-1 text-[#c59d5f] fa-solid"></i>
                    Delivery In 30 Minutes
                  </p>
                </div>
                <div className="bg-white rounded-md w-full">
                  <p className={`m-2 p-4 ${style.btn}`}>
                    {' '}
                    <i className="fa-check-to-slot mx-1 p-1 text-[#c59d5f] fa-solid"></i>
                    Delivery In 30 Minutes
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-md w-full">
                  <p className={`m-2 p-4 ${style.btn}`}>
                    {' '}
                    <i className="fa-check-to-slot mx-1 p-1 text-[#c59d5f] fa-solid"></i>
                    Delivery In 30 Minutes
                  </p>
                </div>
                <div className="bg-white rounded-md w-full">
                  <p className={`m-2 p-4 ${style.btn}`}>
                    {' '}
                    <i className="fa-check-to-slot mx-1 p-1 text-[#c59d5f] fa-solid"></i>
                    Delivery In 30 Minutes
                  </p>
                </div>
              </div>
            </div>

           <Link to={`/menus`}> <button className="my-4 deliver_btn">Order Now</button></Link>
          </div>

          <div className="right">
            <img
              src={delivery_img}
              alt="delivery image"
              className={isVisible ? 'flipping-image' : ''} 
            />
          </div>
        </div>
      </section>
    </>
  );
}
