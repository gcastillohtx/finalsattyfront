import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './VenueSpecs.css'
import HeroImage from './HeroImage'
import FuncSpecs from './FuncSpecs'

function VenueSpecs() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Venue Specs' text='Updated April 2022' />
        <FuncSpecs />
        <Footer />
    </div>
  )
}

export default VenueSpecs