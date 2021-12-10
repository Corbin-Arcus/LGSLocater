import { csrfFetch } from "./csrf";

const GET_GROUPS = 'groups/getGroups'
const GET_GROUP = 'groups/getGroup'
const JOIN_GROUP = 'groups/joinGroup'

const getGroups = (groups) => {
  return{
    type: GET_GROUPS,
    payload: groups
  }
}

const getGroup = (group) => {
  return{
    type: GET_GROUP,
    payload: group
  }
}

const joinGroup = (group) => {
  return{
    type: JOIN_GROUP,
    payload: group
  }
}

export const getOneGroup = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${id}`, {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getGroup(data.group))
}

export const getAllGroups = () => async (dispatch) => {
  const res = await csrfFetch('/api/groups', {
    method: 'GET'
  })
  const data = await res.json()
  console.log(data)
  dispatch(getGroups(data.groups))
}

export const joinAGroup = ({ userId, groupId }) => async (dispatch) => {
  const res = await csrfFetch('/api/userGroups', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      groupId
    })
  })
  const data = await res.json()
  dispatch(joinGroup(data.group))
}

const groupsReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case GET_GROUPS:
      newState = {...state, ...action.payload}
      return newState
    case GET_GROUP:
      newState = {...state, ...action.payload}
      return newState
    case JOIN_GROUP:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}

export default groupsReducer;
