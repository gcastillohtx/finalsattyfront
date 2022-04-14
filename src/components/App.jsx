import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Home'
import VenueSpecs from './VenueSpecs'
import Contact from './Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/venuespecs' element= {<VenueSpecs /> } />
      <Route path='/contact' element= {<Contact /> } />
      
    </Routes>
    </>
  );
}

export default App