import { csrfFetch } from "./csrf";

const GET_GROUPS = 'groups/getGroups'
const GET_GROUP = 'groups/getGroup'
const JOIN_GROUP = 'groups/joinGroup'
const EDIT_GROUP = 'groups/editGroup'
const CREATE_GROUP = 'groups/createGroup'
const DELETE_GROUP = 'groups/deleteGroup'

const deleteGroup = () => {
  return{
    type: DELETE_GROUP
  }
}

const createGroup = (group) => {
  return{
    type: CREATE_GROUP,
    payload: group
  }
}

const editGroup = (group) => {
  return {
    type: EDIT_GROUP,
    payload: group
  }
}

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

export const deleteOneGroup = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${groupId}/deleteGroup`, {
    method: 'DELETE'
  })
  dispatch(deleteGroup())
}

export const createOneGroup = (group) => async (dispatch) => {
  const { groupName } = group;
  const res = await csrfFetch('/api/groups', {
    method: 'POST',
    body: JSON.stringify({
      groupName
    })
  })
  const data = await res.json()
  dispatch(createGroup(data.group))
}

export const editOneGroup = (group) => async (dispatch) => {
  const {
    groupId,
    groupName
  } = group
  const res = await csrfFetch(`/api/groups/${groupId}/editGroup`, {
    method: 'POST',
    body: JSON.stringify({
      groupId,
      groupName,
    })
  })
  const data = await res.json()
  dispatch(editGroup(data.group))
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
    case EDIT_GROUP:
      newState = {...action.payload}
      return newState
    case CREATE_GROUP:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}

export default groupsReducer;
