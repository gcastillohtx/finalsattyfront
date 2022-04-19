import React from 'react'
import EventCard from './EventCard'


function FuncEvents({eventArray}) {
  return (
    <div>
          <>
      <div id="container">
        <ul className="cards">
          {eventArray.map(event => <EventCard key={event.id} event={event} />)}
        </ul>
      </div>
    </>
    </div>
  )
}

export default FuncEvents