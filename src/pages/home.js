import React from 'react'
import About from '../components/home/about'
import Skill from '../components/home/skill'
import Work from '../components/home/work'
import Banner from '../components/home/banner'
import Header from '../components/home/header'
import Footer from '../components/home/footer'

const home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Skill/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default home
