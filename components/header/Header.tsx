import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { navItems } from '../../helpers/NavtItems';
import {Line,NavIcon, Overlay} from './header.style';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiOutlineClose} from "react-icons/ai"
const { motion } = require("framer-motion");

const Header = () => {
  const [toggle, toggleNav] = useState(false);


  return (
    <header className='sm:w-[80%] mx-auto sm:py-4 sm:px-5 w-full px-3'>
      {/* logo */}
         <div className='flex justify-between items-center'>
            <div className="logo relative w-[110px] z-[1000] h-[110px]">
                    <img 
                    src="/assests/MoonBook.svg" 
                    alt="logo"
                    className="w-full h-full"
                    />
                    <motion.span className='absolute top-[25%] left-[23%] text-[13px]'
                     initial={{
                        opacity:0,
                     }}
                      animate={{
                        opacity:1,
                        
                      }}
                      transition={{
                        infinite:true,
                        duration:1,
                        delay:0.5,
                        type: "spring", 
                        stiffness: 500
                      }}
                    >
                      Ayoscript
                    </motion.span>
                    <span className='absolute top-[45%] left-[20%]'>
                      Portfolio
                    </span>
              </div>

              {/* nav items */}
            <div className="navtItems relative">
                <nav className='sm:block hidden'>
                    {
                      navItems.map(item=>{
                        return(
                          <Link href={item.path}  key={item.id} >
                              <motion.a className='sm:px-5 px-3 cursor-pointer contact'
                                whileHover={{
                                  scale: 1.1,
                                  color: "rgba(255,255,255,0.8)",
                                  border:'1px solid rgba(255,255,255,0.8)',
                                  textShadow:'0 0 5px rgba(255,255,255,0.8)'
                                }}
                              >
                              {item.item}
                              </motion.a>
                          </Link>
                        )
                      })
                    }
                </nav>
                <NavIcon onClick={() => toggleNav(!toggle)}>
                  <Line open={toggle} />
                  <Line open={toggle} />
                  <Line open={toggle} />
                </NavIcon>
                {/* mobile navbar */}
                <Overlay open={toggle}>
                   <div className='flex flex-col justify-center h-[100vh] sm:hidden -mt-24 ml-10'>
                   <AiOutlineClose className='absolute top-10 right-0 text-5xl mr-3 sm:hidden' onClick={()=>toggleNav(!toggle)} />
                   {
                      navItems.map(item=>{
                        return(
                          <Link href={item.path}  key={item.id}>
                              <motion.a className='sm:px-5 py-4 cursor-pointer contact text-xl'
                                whileHover={{
                                  scale: 1.1,
                                  color: "rgba(255,255,255,0.8)",
                                  border:'1px solid rgba(255,255,255,0.8)',
                                  textShadow:'0 0 5px rgba(255,255,255,0.8)'
                                }}
                                onClick={()=>toggleNav(false)}
                              >
                              {item.item}
                               {item.icon}
                              </motion.a>
                          </Link>
                        )
                      })
                    }
                    <div className="social-media absolute top-[85%] left-0 w-full">
                        <div className="social-icons flex my-5 mr-4">
                          <AiFillYoutube className='text-4xl ml-3'/>
                          <AiFillFacebook className="text-4xl ml-3"/>
                          <AiFillLinkedin className='text-4xl ml-3'/>
                          <AiFillInstagram className='text-4xl ml-3'/>
                          <AiFillTwitterSquare className='text-4xl ml-3'/>
                      </div>
                    </div>
                   </div>
              </Overlay>
            </div>
         </div>
    </header>
  )
}

export default Header