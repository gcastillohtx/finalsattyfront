import React from 'react'
import './EventCard.css'


function EventCard({event}) {
  return (
    <li className="cards__item">
      <div className="card">
        <img src={event.image} className="card__image" />
        <div className="card__content">
          <div className="card__title">{event.headliner}</div>
          <h3 className="title">{event.support}</h3>
          <p className="card__text">Stage: {event.stage}</p>
          <p className= "date"> {event.date} </p>
          <p className="start"> Doors: {event.doors} </p>
          <h2 style={{color: 'white'}}>{<a href={event.tickets}>Buy Tickets</a>} </h2>
          
        </div>
      </div>
    </li>
  )
}

export default EventCard