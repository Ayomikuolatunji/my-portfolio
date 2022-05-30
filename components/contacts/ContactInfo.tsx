import React from 'react'
import {BsTelephone} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FiMapPin} from "react-icons/fi"

const ContactInfo:React.FC = () => {
  return (
    <ul className='flex flex-col justify-betwween'>
        <li className='sm:mb-16 flex items-center mb-7'>
            <p className='w-16 h-16 rounded-full bg-green-500 flex justify-center items-center mr-3'>
            <FiMapPin className='inline text-white z-[1]'/> 
            </p>
            <span className='text-white font-extrabold'>Warri,Delta State </span>
        </li>
        <li className='sm:mb-16 flex items-center mb-7'>
           <p className='w-16 h-16 rounded-full bg-green-500 flex justify-center items-center mr-3'>
            <MdEmail className='inline text-white z-[1]'/> 
            </p>
            <span className='text-white font-extrabold'>Ayomikuolatunji@gmail.com</span>
        </li>
        <li className='flex items-center'>
            <p className='w-16 h-16 rounded-full bg-green-500 flex justify-center items-center mr-3'>
            <BsTelephone className='inline text-white z-[1]'/> 
            </p>
            <span className='text-white font-extrabold'>+2349025252652</span>
        </li>
   </ul>
  )
}

export default ContactInfo