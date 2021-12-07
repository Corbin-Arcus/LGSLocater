import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'
import { useParams } from 'react-router';


function EventByIdPage() {
const dispatch = useDispatch()
const { id } = useParams()
useEffect(() => {
  dispatch(eventActions.getOneEvent(id))
},dispatch)
const event = useSelector(state => state.event)
return(
  <h1>WIP</h1>
)
}


export default EventByIdPage;
