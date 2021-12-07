import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'


function EventPage() {
  const dispatch = useDispatch()
  const events = useSelector(state => state.event)
  const eventsArr = Object.values(events)
  useEffect(() => {
    dispatch(eventActions.setEvents())
  },[dispatch])
  return (
    <div>
      {eventsArr.map(event =>
        <h1><a href={event.id}>{event.name}</a></h1>
      )}
    </div>
  )
}

export default EventPage;
