import React, { useContext, useState } from 'react'
import style from './Regsiter.module.css'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik';
import img from '../../../public/hero_bg_3_1.png'
import { UserContext } from '../../UserContext/UserContext';

export default function Regsiter () {
 
    let navigate = useNavigate();
    let [APIERR, setAPIERR] = useState(null);
    let {loadingSpinner,setLoadingSpinner}=useContext(UserContext);
  
    async function registerForm(values) {
      
        setLoadingSpinner(true)
        navigate('/home');
        localStorage.setItem(loadingSpinner,true); 
  
    };
  
    let validationSchema = yup.object().shape({
      name: yup.string().min(3, 'min length is 3').max(10, 'max length is 10').required('the name is required'),
      email: yup.string().email('email is invalid').required('email is required'),
      password: yup.string().matches(/^.{5,}$/, 'password is invalid').required('password is required'),
      rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('repassword is required'),
      phone: yup.string().matches(/^01[0-2,5]{1}[0-9]{8}$/, 'Invalid phone number').required('phone is required')
    });
  
    let formik = useFormik({
      initialValues: {
        "name": "",
        "email": "",
        "password": "",
        "rePassword": "",
        "phone": ""
      }, validationSchema,
      onSubmit: registerForm
  
  
    })
  return (
    <>

    <div className="bg-white parent">
    <div className={`my-4`} style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
        backgroundImage: `url(${img})`,
        
       



      }} >
        <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center mx-auto max-w-md h-screen">
        <p className='pb-14 font-semibold text-2xl'> Register</p>

        <div className="relative z-0 mb-5 w-full group">
          <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handle} type="text" name="name" id="name" className="block border-0 border-gray-300 dark:focus:border-[#c59d5f] focus:border-[#c59d5f] dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 focus:ring-0 w-full text-gray-900 text-sm appearance-none dark: focus:outline-none peer" placeholder=" " required />
          <label htmlFor="name" className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-gray-500 text-sm peer-focus:text-[#c59d5f] peer-focus:dark:text-[#c59d5f] dark:text-gray-400 transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">Name</label>
          {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
        </div>


        <div className="relative z-0 mb-5 w-full group">
          <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block border-0 border-gray-300 dark:focus:border-[#c59d5f] focus:border-[#c59d5f] dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 focus:ring-0 w-full text-gray-900 text-sm appearance-none dark: focus:outline-none peer" placeholder=" " required />
          <label htmlFor="email" className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-gray-500 text-sm peer-focus:text-[#c59d5f] peer-focus:dark:text-[#c59d5f] dark:text-gray-400 transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">Email address</label>
          {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
        </div>

        <div className="relative z-0 mb-5 w-full group">
          <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block border-0 border-gray-300 dark:focus:border-[#c59d5f] focus:border-[#c59d5f] dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 focus:ring-0 w-full text-gray-900 text-sm appearance-none dark: focus:outline-none peer" placeholder=" " required />
          <label htmlFor="password" className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-gray-500 text-sm peer-focus:text-[#c59d5f] peer-focus:dark:text-[#c59d5f] dark:text-gray-400 transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">Password</label>
          {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
        </div>

        <div className="relative z-0 mb-5 w-full group">
          <input value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="rePassword" id="rePassword" className="block border-0 border-gray-300 dark:focus:border-[#c59d5f] focus:border-[#c59d5f] dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 focus:ring-0 w-full text-gray-900 text-sm appearance-none dark: focus:outline-none peer" placeholder=" " required />
          <label htmlFor="rePassword" className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-gray-500 text-sm peer-focus:text-[#c59d5f] peer-focus:dark:text-[#c59d5f] dark:text-gray-400 transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">RePassword</label>
          {formik.touched.rePassword && formik.errors.rePassword ? <div className="text-red-500">{formik.errors.rePassword}</div> : null}
        </div>


        <div className="relative z-0 mb-5 w-full group">
          <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="phone" id="phone" className="block border-0 border-gray-300 dark:focus:border-[#c59d5f] focus:border-[#c59d5f] dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 focus:ring-0 w-full text-gray-900 text-sm appearance-none dark: focus:outline-none peer" placeholder=" " required />
          <label htmlFor="phone" className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-gray-500 text-sm peer-focus:text-[#c59d5f] peer-focus:dark:text-[#c59d5f] dark:text-gray-400 transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">Phone</label>
          {formik.touched.phone && formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}
        </div>

        {loadingSpinner ? <button type='submit' className='bg-[#c59d5f] hover:bg-[#c59d5f] dark:hover:bg-[#c59d5f] dark:bg-[#c59d5f] rounded-lg focus:ring-4 focus:outline-none px-6 py-3 focus:ring-[#c59d5f] dark:focus:ring-[#c59d5f] sm:w-auto text-center text-xl'><i className="fa-pulse fa-solid fa-spinner"></i></button> : <button type='submit' className='bg-[#c59d5f] hover:bg-[] dark:hover:bg-[#c59d5f] dark:bg-[#c59d5f] rounded-lg focus:ring-4 focus:outline-none px-6 py-3 focus:ring-[#c59d5f] dark:focus:ring-[#c59d5f] sm:w-auto text-center text-xl'>Submit</button>}




      </form>

      </div>

    </div>
      
    </>
  )
}

