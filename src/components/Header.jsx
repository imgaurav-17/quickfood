import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <div className='flex justify-between items-center py-2 px-10 text-xl border-solid border-2 border-gray-200'>
    <img src="./src/assets/logo1.png" alt="logo" className='w-20 cursor-pointer' />
    <div>
        <nav>
            <ul className="flex gap-x-12">
                <li className='hover:text-green-800 font-semibold cursor-pointer'><Link to="/">Home</Link></li>
                <li className='hover:text-green-800 font-semibold cursor-pointer'><Link to="about">About us</Link></li>
                <li className='hover:text-green-800 font-semibold cursor-pointer'><Link to="Contact">Contact us</Link></li>
                <li className='hover:text-green-800 font-semibold cursor-pointer'>Cart</li>
            </ul>
        </nav>
    </div>
 </div>
 </div>
  )
}
