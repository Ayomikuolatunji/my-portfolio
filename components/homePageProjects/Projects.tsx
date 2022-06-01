import React from 'react'

const Projects:React.FC = () => {
  return (
    <div className='sm:w-[60%] mx-auto w-[95%] mt-10'>
         <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Things I've Built Personally</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>
        <div className="projects mt-16">
             <div className="project-box w-full flex items-center">
                <div className="nasa w-[800px]">
                    {/* <img src="/assests/nasa.png" alt="" /> */}
                </div>
                <div className="project-details text-right">
                    <div className="title">
                     <span className='text-green-500 font-extrabold my-7'>Featured Project</span>
                     <h1>01 Nasa SpaceX Booking Flight</h1> 
                    </div>
                    <div className="project-desc w-[600px] z-50 -ml-9 bg-green-400 p-3 rounded-lg">
                        <h2>The aim of the project is to give people the exprience of how booking spaceX flight looks life in a eal world scenario.</h2>
                    </div>
                    <div className="stacks mt-5">
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg ml-3'>Nodejs</span>
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg'>Expressjs</span>
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg'>MongoDB</span>
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg'>Mongoose</span>
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg'>Reactjs</span>
                        <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg'>Arwes</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Projects