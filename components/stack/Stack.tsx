import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Stack:React.FC = () => {

    const colors =['green','purple', 'pink', 'orange', 'indigo']

      
      const [tabIndex, setTabIndex] = React.useState(0)
      const bg = colors[tabIndex]

  return (
    <div className='sm:w-[70%] mx-auto w-[95%] mt-12'>
        <div className="intro text-center">
            <h1 className='text-green-500 text-3xl font-semibold'>My Skills</h1>
        </div>
        <div className="skill-table">
        <Tabs onChange={(index) => setTabIndex(index)} isLazy>
            <TabList className='flex justify-center w-full p-3 overflow-auto'>
                <Tab className='px-3 text-green-300 hover:text-green-500'>Languages</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Frontends</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Backends/Database</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Tools</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.2)] flex w-full p-3'>
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
                </TabPanel>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.2)] w-full grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 grid-cols-4'>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/icons8-html-5.svg" alt="img" className='w-12 h-12'/>
                          Html5
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/icons8-css3.svg" alt="img" className='w-12 h-12'/>
                          Css3
                       </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/tailwindcss-ar21.svg" alt="img" className='w-12 h-12'/>
                          Tailwindcss
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/icons8-bootstrap.svg" alt="img" className='w-12 h-12'/>
                          Bootstrap
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/icons8-react.svg" alt="img" className='w-12 h-12'/>
                          Reactjs
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/react-typescript.png" alt="img" className='w-12 h-12'/>
                          Reactjs + Typescript</li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/next-js.svg" alt="img" className='w-12 h-12'/>
                          Nextjs
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/nextTypes.jpeg" alt="img" className='w-12 h-12'/>
                          Nextjs + Typescript
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/icons8-redux-50.png" alt="img" className='w-12 h-12'/>
                        Redux
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                        <img src="/assests/mui.png" alt="img" className='w-12 h-12'/>
                          Material-UI
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/chakra.png" alt="img" className='w-12 h-12'/>
                          Chakra-UI
                       </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                         <img src="/assests/framerMotion.jpeg" alt="img" className='w-12 h-12'/>
                          Framer Motion
                     </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/antd.jpeg" alt="img" className='w-12 h-12'/>
                          Ant Design
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/styled-components.jpeg" alt="img" className='w-12 h-12'/>
                          Styled-Components
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                            <img src="/assests/jquery.png" alt="img" className='w-12 h-12'/>
                          Jquery
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center text-center'>
                          <img src="/assests/sass.png" alt="img" className='w-12 h-12'/>
                          Sass
                      </li>      
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.2)] flex w-full p-3 flex-wrap'>
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
                </TabPanel>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.2)] flex w-full p-3 flex-wrap'>
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
                </TabPanel>
            </TabPanels>
        </Tabs>
        </div>
    </div>
  )
}

export default Stack