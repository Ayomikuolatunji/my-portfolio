import React from 'react'
const { motion } = require("framer-motion");



export default function AboutMe() {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 items-center justify-center mt-10 sm:w-[80%] w-[95%] mx-auto'>
        <motion.div className="about-text"
            initial={{
              x:'-100%',
              opacity:0,
            }}
            animate={{
              x:0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              delay:0.8,
            }}
            >
             <h1 className='text-[20px]'>
               <span className='text-3xl'>Hello 👋,</span>
               <br />
                <span  className='text-3xl'> I'm </span>
                <motion.span  className='text-green-500 text-[30px] font-extrabold' >
                Ayomiku Olatunji John
                </motion.span>,
               <br />
                <span>Full Stack Web Developer</span>.
                 <span>
                 I am an experienced software engineer who constantly seek innovative solutions to everyday problem in the web
                  industry.
                 </span>
             </h1>
            <div className="btn">
                <motion.button 
                    className='text-white bg-green-500 rounded-lg px-8 py-2 mt-4'
                    initial={{
                      scale:1.1,
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                >
                  Hire Me
                </motion.button>
                <motion.button 
                  className='text-white bg-green-500 rounded-lg px-8 py-2 mt-4 ml-9'
                  initial={{
                    scale:1.1,
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                 >
               Download CV
             </motion.button>
            </div>
        </motion.div>

        <div className="about-img flex justify-end sm:mt-0 mt-10">
            <img src={"/assests/ayomiku.jpeg"} alt="my-image" 
              className='rounded-[40%] w-[400px] h-[400px] -z-50 opacity-[50%]'
            />
        </div>
    </div>
  )
}
