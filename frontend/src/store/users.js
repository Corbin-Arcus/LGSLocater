import { csrfFetch } from "./csrf";

const GET_USER = 'session/getUser'

const getAUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}

export const getUser = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/session/${id}`, {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getAUser(data.user))
}

const userReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_USER:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state;
  }

}

export default userReducer;
