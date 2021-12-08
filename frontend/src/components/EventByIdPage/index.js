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
  console.log(`storeId is --> ${storeId}`)
  useEffect(() => {
    dispatch(eventActions.getOneEvent(id))
    dispatch(storeActions.getOneStore(storeId))
  },[dispatch])
  const store = useSelector(state => state.stores)
  return(
  <div>
    <h1>{event.name}</h1>
  </div>
)
}


export default EventByIdPage;
