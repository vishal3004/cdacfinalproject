import React from 'react'
import Footer from './Footer'
import HomeBody from './HomeBody'
import Login  from './Login'

import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Login/>
        <HomeBody/>
        <Footer/>
    </div>
  )
}
