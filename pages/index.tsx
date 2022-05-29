import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       {/* <motion.h1
       initial={{ 
         scale: 4.5,
         x: -600,
        }}
        whileHover={{
          scale: 7.5,
        }}
        animate={{
          scale: 2,
          // rotate: 360,
          x: 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          // times: [0, 0.5, 1],
          // loop: Infinity,
        }}
       >
           Framer Motion Hero Page
       </motion.h1> */}
         <div className='grid sm:grid-cols-2 grid-cols-1 items-center w-[80%] mx-auto'>
       <div className='sm:w-[85%] w-full'>
           <h1 className='sm:text-[45px] text-[30px] text-[#1E232C]text-left font-normal font-[Poppins]'>Latest From The Blog</h1>
           <p className='text-[#000000] leading-[2.5] mt-2 opacity-[0.8] capitalize'>
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
           </p>
       </div>
       <div className='sm:w-[100%] w-full sm:mt-0 mt-6'>
          <Image src={"/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg"} height={300} width={800}/>
       </div>
    </div>
    </div>
  )
}

export default Home
