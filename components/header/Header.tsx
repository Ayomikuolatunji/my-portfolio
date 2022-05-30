import Link from 'next/link'
import React from 'react'
const { motion } = require("framer-motion");

const Header = () => {

  const navItems=[
    {
      id:Math.random(),
      path:'/',
      item:"Home"
    },{
      id:Math.random(),
      path:"/blog",
      item:"Blog"
    },{
      id:Math.random(),
      path:"/projects",
      item:"Projects"
    },{
      id:Math.random(),
      path:"/github",
      item:"Github"
    }
  ]

  return (
    <header className='sm:w-[80%] mx-auto sm:py-4 sm:px-5 w-full px-3'>
      {/* logo */}
         <div className='flex justify-between items-center'>
            <div className="logo relative w-[110px] h-[110px]">
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
            <div className="navtItems">
                <nav>
                    {
                      navItems.map(item=>{
                        return(
                          <Link href={item.path} key={item.id}>
                              <motion.a className='sm:px-5 px-3 cursor-pointer'
                                initial={{
                                  opacity:0,
                                  y:"-100%",
                                }}
                                animate={{
                                  opacity:1,
                                  y:"0%",
                                }}
                                transition={{
                                  type: "spring",
                                  delay:0.5,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  color: "rgba(255,255,255,0.8)",
                                  border:'1px solid rgba(255,255,255,0.8)',
                                  textShadow:'0 0 5px rgba(255,255,255,0.8)'
                                }}
                                whileTap={{
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
            </div>
         </div>
    </header>
  )
}

export default Header