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
            <TabList className='flex justify-center w-full p-3 border-b-2 overflow-auto'>
                <Tab className='px-3 text-green-300 hover:text-green-500'>Languages</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Frontends</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Backends</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Databases/Tools</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.5)] flex w-full p-3'>
                        <li className='px-3 flex justify-center flex-col items-center'>
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
                    <ul className='bg-[rgba(0,0,0,0.5)] flex w-full p-3 flex-wrap'>
                      <li className='px-3 flex justify-center flex-col items-center'>
                         <img src="/assests/icons8-html-5.svg" alt="img" className='w-12 h-12'/>
                          Html5
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                         <img src="/assests/icons8-css3.svg" alt="img" className='w-12 h-12'/>
                          Css3
                       </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                         <img src="/assests/tailwindcss-ar21.svg" alt="img" className='w-12 h-12'/>
                          Tailwindcss
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                          <img src="/assests/icons8-bootstrap.svg" alt="img" className='w-12 h-12'/>
                          Bootstrap
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                         <img src="/assests/icons8-react.svg" alt="img" className='w-12 h-12'/>
                          Reactjs
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                          <img src="/assests/react-typescript.png" alt="img" className='w-12 h-16'/>
                          Reactjs + Typescript</li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                        <img src="/assests/next-js.svg" alt="img" className='w-12 h-12'/>
                         Nextjs
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>
                        <img src="/assests/nextTypes.jpeg" alt="img" className='w-12 h-12'/>
                          Nextjs + Typescript
                      </li>
                      <li className='px-3 flex justify-center flex-col items-center'>Material-UI</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Chakra-UI</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Framer Motion</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Ant Design</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Styled-Components</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Jquery</li>
                      <li className='px-3 flex justify-center flex-col items-center'>Sass</li>      
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.5)] flex w-full p-3 flex-wrap'>
                        <li className="px-3">Nodejs</li>
                        <li className="px-3">ExpressJs</li>
                        <li className="px-3">Express + Typescript</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className='bg-[rgba(0,0,0,0.5)] flex w-full p-3 flex-wrap'>
                        <li className="px-3">Mongodb</li>
                        <li className="px-3">Mongoose</li>
                        <li className="px-3">Mysql</li>
                        <li className="px-3">Sequelize</li>
                        <li className="px-3">Aws S3</li>
                        <li className="px-3">Aws Lambda</li>
                        <li className="px-3">Aws DynamoDB</li>
                        <li className="px-3">Aws Api Gateway</li>
                        <li className="px-3">CI/CD</li>
                        <li className="px-3">Git</li>
                        <li className="px-3">Github</li>
                        <li className="px-3">Github Actions</li>
                        <li className="px-3">Docker</li>
                        <li className="px-3"></li>
                    </ul>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </div>
    </div>
  )
}

export default Stack