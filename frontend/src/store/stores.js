import { csrfFetch } from "./csrf";

const GET_STORES = 'stores/getStores'
const GET_STORE = 'stores/getStore'


const getStores = (stores) => {
  return{
    type: GET_STORES,
    payload: stores
  }
}

const getAStore = (stores) => {
  return{
    return: GET_STORE,
    payload: stores
  }
}





export const getAllStores = () => async (dispatch) => {
  const res = await csrfFetch('/api/stores', {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getStores(data.stores))
}

export const getOneStore = (id) => async (dispatch) => {
  console.log(`getAStore id --> ${id}`)
  const res = await csrfFetch(`/api/stores/${id}`, {
    method: 'GET'
  })
  const data = await res.json()
  dispatch(getAStore(data.stores))
}

const storesReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case GET_STORES:
      newState = {...state, ...action.payload}
      return newState
    case GET_STORE:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }

}




export default storesReducer;
