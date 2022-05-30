import Link from 'next/link'
import React from 'react'

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
                    <span className='absolute top-[25%] left-[23%] text-[13px]'>
                      Ayoscript
                    </span>
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
                          <Link href="#blog">
                              <a className='sm:px-5 px-3'>
                              {item.item}
                              </a>
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