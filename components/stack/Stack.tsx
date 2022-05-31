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
        <Tabs onChange={(index) => setTabIndex(index)}>
            <TabList className='flex justify-between w-full p-3 border-b-4'>
                <Tab>Languages</Tab>
                <Tab>Frontend</Tab>
                <Tab>Blue</Tab>
                <Tab>Blues</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ul className='flex w-full p-3'>
                      <li className='px-3'>Javascript</li>
                      <li className='px-3'>Typescript</li>
                      <li className='px-3'>PHP</li>     
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className='flex w-full p-3 flex-wrap'>
                      <li className='px-3'>Html</li>
                      <li className="px-3">Css</li>
                      <li className="px-3">Tailwindcss</li>

                      <li className="px-3">Reactjs</li>
                      <li className="px-3">Nextjs</li>
                      <li className='px-3'>Material-UI</li>
                      <li className='px-3'>Chakra-UI</li>
                      <li className="px-3"></li>     
                    </ul>
                </TabPanel>
                <TabPanel>Red, yellow and blue.</TabPanel>
                <TabPanel>Red, yellow and blues.</TabPanel>
            </TabPanels>
        </Tabs>
        </div>
    </div>
  )
}

export default Stack