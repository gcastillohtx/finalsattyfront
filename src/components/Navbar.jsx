import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'




function Navbar() {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <div className='header'>
      <Link to ='/'><h1>Satellite Houston 📡</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/allevents'>All Events</Link>
        </li>
        <li>
          <Link to='/store'>Merch Store</Link>
        </li>
        <li>
          <Link to='/venuespecs'>Venue Info</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}

export default Navbar