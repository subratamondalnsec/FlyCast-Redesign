import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Statistics from '../components/Statistics'
import DroneModels from '../components/DroneModels'
import FieldInsights from '../components/FieldInsights'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Statistics />
      <DroneModels />
      <FieldInsights />
      <Footer />
    </div>
  )
}

export default Home