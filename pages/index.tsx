import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <motion.h1
        animate={{
          rotate: 360,
          scale: 2
        }}
       >
           Framer Motion Hero Page
       </motion.h1>
    </div>
  )
}

export default Home
