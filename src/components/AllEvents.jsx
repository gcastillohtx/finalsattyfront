import React from 'react'
import Navbar from './Navbar'
import HeroImage from './HeroImage'

import Footer from './Footer'

import FuncEvents from './FuncEvents'


function AllEvents({eventArray}) {
  return (
    <div>
      <Navbar />
      <HeroImage heading='All Events' text='Browse our upcoming shows and buy tickets!'/>
      <FuncEvents eventArray={eventArray}/>
      <Footer />


    </div>
  )
}

export default AllEvents