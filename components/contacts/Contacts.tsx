import React from 'react'
import Form from './Form'

export default function Contacts(){
  return (
    <div className='sm:w-[80%] mx-auto mt-12'>
        <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Contact Me</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>


        <div className="content w-full flex items-center flex-wrap">
            {/* contact information */}
            <div className="contact sm:w-[35%] w-[95%] mx-auto">
                <ul>
                    <li>Location</li>
                    <li>Email</li>
                    <li>Phone</li>
                </ul>
            </div>
            {/* form part */}
            <div className="form sm:w-[65%] mt-12 w-[95%] mx-auto">
                <Form/>
            </div>
        </div>
    </div>
  )
}
