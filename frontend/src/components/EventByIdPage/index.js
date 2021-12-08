import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'
import * as storeActions from '../../store/stores'
import { useParams } from 'react-router-dom';


function EventByIdPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const event = useSelector(state => state.event)
  const storeId = event.storeId
  useEffect(() => {
    dispatch(eventActions.getOneEvent(id))
  },[dispatch])
  useEffect(() => {
    dispatch(storeActions.getOneStore(storeId))
  },[event])
  const store = useSelector(state => state.stores)
  return(
  <div>
    <h1>{event.name}</h1>
    <h2>This event is held at: {store.storeName}</h2>
    <h2>This events game will be: {event.eventGame}</h2>
  </div>
)
}


export default EventByIdPage;

