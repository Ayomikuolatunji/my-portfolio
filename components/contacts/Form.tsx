import React from 'react'
const { motion } = require("framer-motion");


const Form:React.FC= () => {
  return (
    <form action="">
    <div className="fullname w-full">
        <input 
        type="text" 
         className='p-4 rounded-[100px] w-full bg-transparent border-2 border-green-200 placeholder-white'
         placeholder='Full Name'
        />
    </div>
    <div className="email-phone mt-4 flex-wrap">
        <input 
            type="email" 
            className='p-4 rounded-[100px] sm:w-[50%] w-full bg-transparent border-2 border-green-200 placeholder-white'
            placeholder='Email'
        />
        <select name="service" id=""
          className='p-4 rounded-[100px] sm:w-[50%] w-full bg-transparent border-2 border-green-200 sm:mt-0 mt-4'
        >
             <option value="select what you need me for" className='bg-gray-500 rounded-[100px]'>Select why you need me</option>
            <option value="job offer" className='bg-gray-500 rounded-[100px]'>
                Job offer</option>
            <option value="freelance job" className='bg-gray-500 rounded-[100px]'>Freelance job</option>
            <option value="consultancy" className='bg-gray-500 rounded-[100px]'>Consultancy</option>
            <option value="partnership offer" className='bg-gray-500 rounded-[100px]'>Partnership offer</option>
        </select>
    </div>
    <div className="message mt-7 w-full">
        <textarea  className='p-4 rounded-[10px] w-full bg-transparent border-2 border-green-200 sm:h-[240px] h-[170px] placeholder-white' placeholder='message'/>
    </div>
    <div className="submit">
         <motion.button 
          className='text-white bg-green-500 rounded-lg px-8 py-2 mt-4 ml-3'
          initial={{
            scale:1.1,
          }}
          whileHover={{
            scale: 1.2,
          }}
          >
           Submit
      </motion.button>
    </div>
</form>
  )
}

export default Form