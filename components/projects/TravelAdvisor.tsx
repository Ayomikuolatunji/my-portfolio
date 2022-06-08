import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const TravelAdvisor:React.FC = () => {
  return (
    <div className="project-box w-full shadow-[1px 2px 10px rgba(0,0,0,0.5)]">
            <div className="title mb-3">
                <span className='text-green-500 font-extrabold my-7 text-2xl'>Featured Project</span>
                    <div className="inner flex items-center justify-between">
                    <h1>02 Travel Advisor</h1> 
                    <div className="icons flex items-center">
                    <a href="https://github.com/Ayomikuolatunji/project_travel_map" target="_blank">
                    <AiFillGithub className='text-3xl mr-3'/>
                    </a>
                    <a href="https://travel-map-advisor.netlify.app/" target="_blank">
                    <FiExternalLink className='text-3xl'/>
                    </a>
                    </div>
                </div>
            </div>
            <div className="nasa ">
                <img src="/assests/travel.png" alt="" />
            </div>
            <div className="project-details">
                <div className="project-desc z-50  bg-[rgba(0,0,0,0.6)] p-3 rounded-b-lg">
                    <p>
                      I decided to build an application that can be helpful to travelers to locate Hotels, Resturants and Dinings around their current location. The web app is fully responsive to serve users access mode(desktop, tablets and mobile devices).
                    </p>
                </div>
                <div className="stacks flex flex-wrap">
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Reactjs</span>
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>Material-Ui</span>
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>React Icons</span>
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>@google-map-react</span>
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-2 mt-2'>react-google-maps</span>
                    <span className='bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded-lg mx-3 mt-2'>Tailwindcss</span>
                    </div>
            </div>  
        </div>
  )
}

export default TravelAdvisor