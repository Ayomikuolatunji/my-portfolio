import React from 'react'

const Stack:React.FC = () => {
  return (
    <div className='sm:w-[80%] mx-auto w-[95%] mt-12'>
        <div className="intro text-center">
            <h1 className='text-green-500 text-3xl font-semibold'>My Skills</h1>
        </div>
        <div className="skill-table">
        <table className='w-full'>
            <tr>
                <th>Backend</th>
                <th>Frontend</th>
                <th>Databases</th>
                <th>Others/Tools</th>
            </tr>
            <tr>
                <td>Nodejs</td>
                <td>Html && Css</td>
                <td>MongoDB</td>
                <td>Git</td>
            </tr>
            <tr>
                <td>Express</td>
                <td>Reactjs</td>
                <td>Mongoose</td>
                <td>CI/CD</td>
            </tr>
            <tr>
                <td></td>
                <td>Reactjs</td>
                <td>Mongoose</td>
                <td>CI/CD</td>
            </tr>
            </table>
        </div>
    </div>
  )
}

export default Stack