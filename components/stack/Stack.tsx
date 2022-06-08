import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Tools from './Tools'
import Backends from './Backends'
import Frontends from './Frontends'
import Languages from './Languages'

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
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Frontends</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Backends/Databases</Tab>
                <Tab className='px-3 text-green-300 hover:text-green-500'>Languages</Tab>
                <Tab  className='px-3 text-green-300 hover:text-green-500'>Tools</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                   <Frontends/>
                </TabPanel>
                <TabPanel>
                    {/* backends stacks */}
                     <Backends/>
                </TabPanel>
                <TabPanel>
                     <Languages/>
                </TabPanel>
                <TabPanel>
                    {/* import Tools */}
                     <Tools/>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </div>
    </div>
  )
}

export default Stack