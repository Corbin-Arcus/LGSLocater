import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser'
const GET_USER = 'session/getUser'

const getAUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password
    })
  })
  const data = await response.json();
  if(data.errors) return data.errors
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  const data = await response.json()
  dispatch(setUser(data.user))
  return response
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeUser())
  return response;
}

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session')
  const data = await response.json()
  dispatch(setUser(data.user));
  return response
}

export const getUser = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/session/${id}`, {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getAUser(data.user))
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState
    case GET_USER:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state;
  }

}

export default sessionReducer;
