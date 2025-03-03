import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                You should also have some experience with the new JavaScript features introduced in ECMAScript 6 (ES6)
                </p>
            </div>
            <div className=''>
                <p className='text-xl font-medium mb-5'>COMMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className=''>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+995591440010</li>
                    <li>grili niavi.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr/>
            <p className='py-5 text-center text-sm'>Copyright 2025@ Forever.com - All Right reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
