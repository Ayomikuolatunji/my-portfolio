import React from 'react'
import NasaProject from './NasaProject';



const Projects:React.FC = () => {
  return (
    <div className='sm:w-[60%] mx-auto w-[95%] mt-10'>
         <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Things I've Built Personally</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>
        <div className="projects mt-16 grid sm:grid-cols-3 w-full grid-cols-1">
               <NasaProject/>
        </div>
    </div>
  )
}

export default Projects