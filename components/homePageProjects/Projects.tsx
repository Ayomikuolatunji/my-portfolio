import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {FiExternalLink} from "react-icons/fi";
const Projects:React.FC = () => {
  return (
    <div className='sm:w-[60%] mx-auto w-[95%] mt-10'>
         <div className="intro flex justify-center items-center">
             <h1 className='text-green-500 text-xl font-extrabold 
             opacity-[1]'>Things I've Built Personally</h1>
             <span className='bg-green-500 h-[5px] w-[57px] block ml-3'></span>
        </div>
        <div className="projects mt-16 grid sm:grid-cols-3 w-full grid-cols-1">
                <div className="project-box w-full shadow-[1px 2px 10px rgba(0,0,0,0.5)]">
                   <div className="title mb-3">
                        <span className='text-green-500 font-extrabold my-7 text-2xl'>Featured Project</span>
                         <div className="inner flex items-center justify-between">
                           <h1>01 Nasa SpaceX Booking Flight</h1> 
                           <div className="icons flex items-center">
                            <a href="https://github.com/Ayomikuolatunji/Nasa-travel-space-booking" target="_blank">
                            <AiFillGithub className='text-3xl mr-3'/>
                            </a>
                            <a href="https://nasa-spacex-launch.herokuapp.com/" target="_blank">
                            <FiExternalLink className='text-3xl'/>
                            </a>
                           </div>
                        </div>
                    </div>
                    <div className="nasa ">
                        <img src="/assests/nasa.png" alt="" />
                    </div>
                    <div className="project-details">
                        <div className="project-desc z-50  bg-[rgba(0,0,0,0.6)] p-3 rounded-b-lg">
                            <p>
                               This project aim at booking a flight for the spacex. Users can book a flight for the spacex, see history of the flight and cancel the flight. They can also see the status of the flight.All the successfull booked flight will be saved in the database.
                            </p>
                        </div>
                        <div className="stacks flex flex-wrap">
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Nodejs</span>
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Expressjs</span>
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>MongoDB</span>
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Mongoose</span>
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Reactjs</span>
                            <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-3 mt-2'>Arwes</span>
                         </div>
                    </div>  
                </div>
                <div></div>
                <div></div>
                <div></div>
        </div>
    </div>
  )
}

export default Projects