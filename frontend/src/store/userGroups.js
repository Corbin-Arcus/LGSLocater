import { csrfFetch } from "./csrf";

const GET_USERGROUP = 'userGroups/getUsergroup'


const getUserGroups = (userGroup) => {
  return {
    type: GET_USERGROUP,
    payload: userGroup
  }
}


export const getOneUserGroup = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/userGroup/${groupId}`, {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getUserGroups(data.userGroup))
}

const userGroupsReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case GET_USERGROUP:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}






export default userGroupsReducer;
