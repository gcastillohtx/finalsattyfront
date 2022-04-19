import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Home'
import VenueSpecs from './VenueSpecs'
import Contact from './Contact'
import AllEvents from './AllEvents'
import Store from './Store'

function App() {

  const [eventArray, setEventArray] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEventArray(data));
  }, []);



  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/venuespecs' element= {<VenueSpecs /> } />
      <Route path='/contact' element= {<Contact /> } />
      <Route path='/allevents' element= {<AllEvents eventArray={eventArray} /> } />
      <Route path='/store' element= {<Store /> } />
    </Routes>
    </>
  );
}

export default App