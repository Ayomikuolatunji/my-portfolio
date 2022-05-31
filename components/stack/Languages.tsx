import React from 'react'

const Languages:React.FC= () => {
  return (
    <ul className='bg-[rgba(0,0,0,0.002)] flex w-full p-3'>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
      <img src="/assests/icons8-javascript.svg" alt="img" className='w-12 h-12'/>
      Javascript
    </li>
  <li className='px-3 flex justify-center flex-col items-center'>
     <img src="/assests/icons8-typescript.svg" alt="img" className='w-12 h-12'/>
      Typescript
   </li>   
   <li className='px-3 flex justify-center flex-col items-center'>
     <img src="/assests/icons8-php-logo.svg" alt="img" className='w-12 h-12'/>
      PHP
   </li>   
</ul>
  )
}

export default Languages