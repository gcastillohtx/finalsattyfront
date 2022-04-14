import React from 'react'
import Navbar from './Navbar'
import HeroImage from './HeroImage'
import Footer from './Footer'
import FuncContact from './FuncContact'

function Contact() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Contact Us' text='We book what we like. See below to find out how we can best serve you.' />
        <FuncContact />
        <Footer />
    </div>
  )
}

export default Contact