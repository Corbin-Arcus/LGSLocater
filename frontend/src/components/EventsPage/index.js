import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'


function EventPage() {
  const dispatch = useDispatch()
  const events = useSelector(state => state.event)
  const eventsArr = Object.values(events)
  useEffect(() => {
    dispatch(eventActions.setEvents())
  },[dispatch])
  console.log(eventsArr)
  return (
    <div>
      {eventsArr.map(event =>
        <p>{event.name}</p>
      )}
    </div>
  )
}

export default EventPage;
