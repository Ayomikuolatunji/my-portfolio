import React from 'react'

const Header = () => {

  const navItems=[
    {
      id:Math.random(),
      item:"Home"
    }
  ]

  return (
    <div className='w-[80%] mx-auto sm:py-10 sm:px-5 '>
         <div className="logo">
             <h1>Ayoscript</h1>
         </div>

         <div className="navtItems">

         </div>
    </div>
  )
}

export default Header