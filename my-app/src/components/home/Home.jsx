import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonial/Test'
import Hblog from './Hblog'
import HPrice from './HPrice'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutCard/>
        <HAbout />
        <Test />
        <Hblog/>
        <HPrice/>
    </>
  )
}

export default Home