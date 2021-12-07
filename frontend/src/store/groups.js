import { csrfFetch } from "./csrf";

const GET_GROUPS = 'groups/getGroups'

const getGroups = (groups) => {
  return{
    type: GET_GROUPS,
    payload: groups
  }
}

export const getAllGroups = () => async (dispatch) => {
  const res = await csrfFetch('/api/groups', {
    method: 'GET'
  })
  const data = await res.json()
  console.log(data)
  dispatch(getGroups(data.groups))
}

const groupsReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case GET_GROUPS:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}

export default groupsReducer;
