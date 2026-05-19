import React from 'react'
import Navbar from './selections/Navbar'
import Hero from './selections/Hero'
import About from './selections/About'
import Projects from './selections/Projects'
import Experiences from './selections/Experiences'
import Contact from './selections/Contact'
import Footer from './selections/Footer'
import Sertivication from './selections/Sertivication'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Experiences/>
        <Sertivication/>
        {/* <Contact/> */}
        <Footer/>
    </div>
  )
}

export default App