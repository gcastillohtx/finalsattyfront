import React from 'react'
import {Link} from 'react-router-dom'
import './Background.css'

import sattyVideo from '../assets/Video.mp4'

function Background() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={sattyVideo} type='video/mp4' />
      </video>
        <div className='content'>
          <h1>Great Music, Great Drinks, Even Better Times</h1>
          <p>Houston's Favorite Lil' Music Venue</p>
          <p>Est.2015</p>
       
        <div>
          <Link to='/allevents' className='btn'>Tickets</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>

    </div>
  )
}

export default Background