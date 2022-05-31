import React from 'react'

const Tools:React.FC = () => {
  return (
    <ul className='bg-[rgba(0,0,0,0.002)] grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 grid-cols-4'>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/icons8-amazon-s3.svg" alt="img" className='w-12 h-12'/>
        Aws S3
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/aws-lambda-icon.svg" alt="img" className='w-12 h-12'/>
        Aws Lambda
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/dynamodb.svg" alt="img" className='w-12 h-12'/>
        Aws DynamoDB
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/aws-api-gateway.svg" alt="img" className='w-12 h-12'/>
        Aws Api Gateway
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
         <img src="/assests/cicd.svg" alt="img" className='w-12 h-12'/>
        CI/CD
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/icons8-git.svg" alt="img" className='w-12 h-12'/>
        Git
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
       <img src="/assests/github.svg" alt="img" className='w-12 h-12'/>
        Github
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/github-action.svg" alt="img" className='w-12 h-12'/>
        Github Actions
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/icons8-docker.svg" alt="img" className='w-12 h-12'/>
        Docker
    </li>
    <li className='px-3 flex justify-center flex-col items-center text-center'>
        <img src="/assests/jest-icon.svg" alt="img" className='w-12 h-12'/>
        Jest
    </li>
</ul>
  )
}

export default Tools