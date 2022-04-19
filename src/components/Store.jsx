import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import HeroImage from './HeroImage'
import FuncStore from './FuncStore'

function Store() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Merch Store' text='Shop Our Latest Merch Drop' />
        <FuncStore />
        <Footer />
    </div>
  )
}

export default Store