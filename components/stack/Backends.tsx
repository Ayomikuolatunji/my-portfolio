import React from 'react'

const Backends:React.FC = () => {
  return (
    <ul className='bg-[rgba(0,0,0,0.01)] grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 grid-cols-4'>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/icons8-nodejs.svg" alt="img" className='w-12 h-12'/>
        Nodejs
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/expressjs-icon.svg" alt="img" className='w-12 h-12'/>
        ExpressJs
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/mongodb.svg" alt="img" className='w-12 h-12'/>
        MongoDB
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/mongoose.svg" alt="img" className='w-12 h-12'/>
        Mongoose
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/icons8-mysql-logo.svg" alt="img" className='w-12 h-12'/>
        Mysql
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/sequelize-icon.svg" alt="img" className='w-12 h-12'/>
        Sequelize
    </li>
</ul>
  )
}

export default Backends