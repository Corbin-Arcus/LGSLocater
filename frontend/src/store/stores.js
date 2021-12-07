import { csrfFetch } from "./csrf";

const GET_STORES = 'stores/getStores'


const getStores = (stores) => {
  return{
    type: GET_STORES,
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

const storesReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case GET_STORES:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }

}




export default storesReducer;
