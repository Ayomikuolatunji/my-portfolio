import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <motion.h1
       initial={{ 
         scale: 4.5,
        }}
        animate={{
          scale: 2,
          // rotate: 360,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
        }}
       >
           Framer Motion Hero Page
       </motion.h1>
    </div>
  )
}

export default Home
