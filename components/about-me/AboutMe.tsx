import React from 'react'
const { motion } = require("framer-motion");
import {BsChevronDown} from "react-icons/bs"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'



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
             <h1 className='text-[18px]'>
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
              <h1 className='text-[18px] mt-4'>
              Fast-forward to today, and I've had the privilege of working at an Agro E-commerce company, an Edutech start-up, and I have couples of greate personal projects. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients and also helping compaines achieve their purpose digitally.
              </h1>
            <div className="btn mt-4">
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
                <Menu>
                  <MenuButton as={Button} rightIcon={<BsChevronDown />}
                    className='text-white bg-green-500 rounded-lg px-8 py-2.5 ml-2'
                  >
                    Download CV
                  </MenuButton>
                  <MenuList className='bg-green-500 p-3 rounded-lg'>
                    <MenuItem>
                     <a href="https://drive.google.com/file/d/1iptZ9wB80ghZjO34_QP2r9PvXl5FEbcv/view?usp=sharing">
                     Download Fullstack CV
                     </a>
                    </MenuItem>
                    <MenuItem>
                    <a href="https://drive.google.com/file/d/1iptZ9wB80ghZjO34_QP2r9PvXl5FEbcv/view?usp=sharing" target={"_blank"}>Download Frontend CV
                    </a>
                    </MenuItem>
                  </MenuList>
                </Menu>
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
