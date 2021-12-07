import { csrfFetch } from './csrf'

const CREATE_EVENT = 'event/creatEvent'
const REMOVE_EVENT = 'event/removeEvent'


const createEvent = (event) => {
  return{
    type: CREATE_EVENT,
    payload: event
  }
}

export const createEvent = (event) => async (dispatch) => {
  const { name, eventGame } = event;
  const res = await csrfFetch('/api/event', {
    method: 'POST',
    body: JSON.stringify({
      name,
      eventGame
    })
  })
  const data = await res.json()
  dispatch(creatEvent(data.event))
}

const initialState = { event: null };

const eventReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case CREATE_EVENT:
      newState = Object.assign({}, state)
      newState.event = action.payload
      return newState
    default:
      return state;
  }
}

export default eventReducer;
