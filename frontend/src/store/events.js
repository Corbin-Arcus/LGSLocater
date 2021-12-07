import { csrfFetch } from './csrf'

const SET_EVENT = 'event/setEvent'
const CREATE_EVENT = 'event/creatEvent'
const REMOVE_EVENT = 'event/removeEvent'

const setEvent = (event) => {
  return{
    type: SET_EVENT,
    payload: event
  }
}

const createEvent = (event) => {
  return{
    type: CREATE_EVENT,
    payload: event
  }
}

export const setEvents = () => async (dispatch) => {
  const res = await csrfFetch('/api/events', {
    method: 'GET'
  })
  const data = await res.json()
  console.log(`The return value of the csrfFetch is ${data.events}`)
  dispatch(setEvent(data.events))
}

export const createAnEvent = (event) => async (dispatch) => {
  const { name, eventGame, storeId} = event;
  const res = await csrfFetch('/api/events', {
    method: 'POST',
    body: JSON.stringify({
      name,
      eventGame,
      storeId
    })
  })
  const data = await res.json()
  dispatch(createEvent(data.events))
}

const eventReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case SET_EVENT:
      newState = {...state, ...action.payload}
      return newState
    case CREATE_EVENT:
      newState = {...state, ...action.payload}
      return newState
      default:
        return state;
      }
  }


export default eventReducer;
