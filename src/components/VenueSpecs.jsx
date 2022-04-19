import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import HeroImage from './HeroImage'
import FuncSpecs from './FuncSpecs'

function VenueSpecs() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Venue Specs' text='' />
        <FuncSpecs />
        <Footer />
    </div>
  )
}

export default VenueSpecs