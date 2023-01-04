import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout