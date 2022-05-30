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
            <div className="form w-[65%] mt-12">
                <form action="">
                    <div className="fullname w-full">
                        <input 
                        type="text" 
                         className='p-4 rounded-[100px] w-full bg-transparent border-2 border-green-200 placeholder-white'
                         placeholder='Full Name'
                        />
                    </div>
                    <div className="email-phone mt-4">
                    <input 
                        type="email" 
                         className='p-4 rounded-[100px] w-[50%] bg-transparent border-2 border-green-200 placeholder-white'
                         placeholder='Email'
                        />
                        <select name="service" id=""
                          className='p-4 rounded-[100px] w-[50%] bg-transparent border-2 border-green-200 '
                        >
                             <option value="select what you need me for" className='bg-gray-500 rounded-[100px]'>Select why you need me</option>
                            <option value="job offer" className='bg-gray-500 rounded-[100px]'>
                                Job offer</option>
                            <option value="freelance job" className='bg-gray-500 rounded-[100px]'>Freelance job</option>
                            <option value="consultancy" className='bg-gray-500 rounded-[100px]'>Consultancy</option>
                            <option value="partnership offer" className='bg-gray-500 rounded-[100px]'>Partnership offer</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
