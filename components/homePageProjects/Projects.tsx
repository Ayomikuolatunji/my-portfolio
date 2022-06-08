import Link from 'next/link';
import React from 'react'
import NasaProject from '../projects/NasaProject';
import ReactWordCountries from '../projects/ReactWordCountries';
import TravelAdvisor from '../projects/TravelAdvisor';



const Projects:React.FC = () => {
  return (
    <div className='sm:w-[70%] mx-auto w-[95%] mt-16'>
         <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Things I've Built Personally</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>
        <div className="projects mt-16 grid sm:grid-cols-3 w-full grid-cols-1 gap-3">
               <NasaProject/>
               <TravelAdvisor/>
               <ReactWordCountries/>
        </div>
        <div className="see-more flex justify-center mt-10">
            <Link href='/projects'>
                  <button className='text-green-500 text-xl font-extrabold px-7 py-2 rounded-3xl border-2 border-white hover:bg-green-500 hover:text-white hover:border-0'>
                    See more projects
                  </button>
            </Link>
        </div>
    </div>
  )
}

export default Projects