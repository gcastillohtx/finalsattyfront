import React from 'react'
import './FuncContact.css'
import Maria from '../assets/1-2.JPG'
import TP from '../assets/tp.JPG'


function FuncContact() {
  return (
    <div className='funccontact'>
        <div className='left'>
            <h1>Contacts</h1>
            <p>General: satellitehtx@gmail.com</p>
            <p>Booking: gil@satelllitehouston.com</p>
            <p>Rentals: rentals@satellitehouston.com</p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Maria} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={TP} className='img' alt='' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default FuncContact