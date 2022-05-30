import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

interface props{
    children?:JSX.Element
}

const HeaderWrapper = (props:props) => {
  return (
    <div>
        <Header/>
        <main>
            {props.children}
        </main>
         <Footer/>
    </div>
  )
}

export default HeaderWrapper