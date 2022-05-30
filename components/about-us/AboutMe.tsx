import React from 'react'
const { motion } = require("framer-motion");



export default function AboutMe() {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 items-center justify-center mt-10 w-[90%] mx-auto'>
        <motion.div className="about-text"
          
        >
             <h1 className='text-[20px]'>
               My name <motion.span className='text-blue-500 text-[30px]'
                  
               >Ayomiku Olatunji John</motion.span>,
               <br />
               I am a  <span>Full Stack Web Developer</span>.
               I have a passion for 
               <span>creating</span> and 
               <span>learning</span>.
             </h1>
             <button 
                className='text-white bg-blue-500 rounded-lg px-4 py-2 mt-4'
             >
               Hire Me
             </button>
        </motion.div>

        <div className="about-img flex justify-end sm:mt-0 mt-10">
            <img src={"/assests/ayomiku.jpeg"} alt="my-image" 
              className='rounded-full w-[400px] h-[400px] -z-50 opacity-[50%]'
            />
        </div>
    </div>
  )
}
