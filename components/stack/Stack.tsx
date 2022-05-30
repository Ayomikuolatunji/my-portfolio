import React from 'react'

const Stack:React.FC = () => {
  return (
    <div className='sm:w-[80%] mx-auto w-[95%] mt-12'>
        <div className="intro text-center">
            <h1 className='text-green-500 text-3xl font-semibold'>My Skills</h1>
        </div>
        <div className="skill-table grid sm:grid-cols-4 mt-16 grid-cols-2">
            <div className="skill-table-col">
                <div className="title text-center">
                    <h1>Languages</h1>
                </div>
                <div className="languagues">

                </div>
            </div>
            <div className="skill-table-col">
                <div className="title text-center">
                    <h1>Frameworks</h1>
                </div>
            </div>
            <div className="skill-table-col">
                 <div className="title text-center">
                    <h1>Tools</h1>
                </div>
            </div>
            <div className="skill-table-col">
                 <div className="title text-center">
                    <h1>Other</h1>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Stack