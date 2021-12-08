import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'
import { Link } from 'react-router-dom'
import styles from '../../css-modules/EventPage.module.css'


function EventPage() {
  const dispatch = useDispatch()
  const events = useSelector(state => state.event)
  const eventsArr = Object.values(events)
  useEffect(() => {
    dispatch(eventActions.setEvents())
  },[dispatch])

  const sendId = async (event) => {
    await dispatch(eventActions.deleteAnEvent(event.id))
    dispatch(eventActions.setEvents())
  }

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {eventsArr.map(event =>
        <>
          <h1 key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></h1>
          <Link to={`/events/${event.id}/editEvent`}><button>Edit Event</button></Link>
          <button onClick={() => sendId(event)}>Delete Event</button>
        </>
        )}
      </div>
    </div>
)
}

export default EventPage;
