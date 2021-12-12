import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'
import { Link } from 'react-router-dom'
import styles from '../../css-modules/EventPage.module.css'


function EventPage() {
  const dispatch = useDispatch()
  const events = useSelector(state => state.event)
  const eventsArr = Object.values(events)
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(eventActions.setEvents())
  },[dispatch])

  const sendId = async (event) => {
    await dispatch(eventActions.deleteAnEvent(event.id))
    dispatch(eventActions.setEvents())
  }

  const refresh = () => {
    dispatch(eventActions.setEvents())
  }

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <h1>Events:</h1>
        {eventsArr?.map(event =>
        <div className={styles.eventContainer}>
          <h2 key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></h2>
          {sessionUser &&
          <>
          <Link to={`/events/${event.id}/editEvent`}><button onClick={() => refresh()}>Edit Event</button></Link>
          <button onClick={() => sendId(event)}>Delete Event</button>
          </>
          }
        </div>
        )}
      </div>
    </div>
)
}

export default EventPage;
