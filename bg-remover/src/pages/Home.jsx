import React from 'react'
import Header from '../components/Header'
import Steps from '../components/steps'
import Bg_slider from '../components/Bg_slider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'


const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Bg_slider/>
      <Testimonials/>
      <Upload/>
      
    </div>
  )
}

export default Home
