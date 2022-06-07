import React, { useEffect } from 'react'
import AboutMe from '../../components/about-me/AboutMe'
import Contact from '../../components/contacts/Contacts'
import Projects from '../../components/homePageProjects/Projects'
import Stack from '../../components/stack/Stack'

const Home = () => {


  return (
    <div>
      <AboutMe/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home