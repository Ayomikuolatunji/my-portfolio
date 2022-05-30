import React from 'react'
import AboutMe from '../../components/about-me/AboutMe'
import Contact from '../../components/contacts/Contacts'
import Stack from '../../components/stack/Stack'

const Home = () => {
  return (
    <div>
      <AboutMe/>
      <Stack/>
      <Contact/>
    </div>
  )
}

export default Home