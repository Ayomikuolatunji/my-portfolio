import React from 'react'
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
    </div>
  )
}

export default HeaderWrapper