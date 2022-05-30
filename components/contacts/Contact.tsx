import React from 'react'

export default function Contact() {
  return (
    <div className='sm:w-[80%] mx-auto mt-12'>
        <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Contact Me</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>


        <div className="content w-full flex">
            <div className="contact w-[35%]">
                <ul>
                    <li>Location</li>
                    <li>Email</li>
                    <li>Address</li>
                </ul>
            </div>
            <div className="form w-[65%]">
                <form action="">
                    <div className="fullname w-full">
                        <input 
                        type="text" 
                         className='p-4 rounded-lg w-full bg-transparent'
                         placeholder='Full Name'
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
