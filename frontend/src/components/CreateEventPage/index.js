import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'
import * as storeActions from '../../store/stores'
import * as groupActions from '../../store/groups'

function CreateEventPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [eventGame, setEventGame] = useState("");
  const [errors, setErrors] = useState([]);
  const [storeId, setStoreId] = useState(0)
  const [groupId, setGroupId] = useState(0)



  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length < 5 || name.length > 100){
      setErrors(['Event name must be between 5 and 100 characters'])
    }
    else if(eventGame.length < 5 || eventGame.length > 100)
    {
      setErrors(['The event games name must be between 5 and 100 characters'])
    }
    else{
      setErrors([])
      setEventGame('')
      setName('')
      setStoreId(0)
      return dispatch(eventActions.createAnEvent({ name, eventGame, storeId, groupId }))
        .catch(async (res) => {
          const data = await res.json();
          if(data && data.errors) setErrors(data.errors)
        })

    }
  };
    useEffect(() => {
      dispatch(storeActions.getAllStores())
      dispatch(groupActions.getAllGroups())
    },[dispatch])


    const stores = useSelector(state => state.stores)
    const storesArr = Object.values(stores)
    const groups = useSelector(state => state.groups)
    const groupsArr = Object.values(groups)

  return (
    <div className='createEventForm'>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Event Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Event Game
          <select
          value={eventGame}
          required
          onChange={(e) => setEventGame(e.target.value)}
          >
            <option></option>
            <option value='Magic the Gathering'>Magic the Gathering</option>
            <option value='Vanguard'>Vanguard</option>
            <option value='Warhammer'>Warhammer</option>
          </select>
        </label>
        <label>
          Store
          <select value={storeId} required onChange={(e) => setStoreId(e.target.value)}>
            <option></option>
            {storesArr.map(store => <option key={store.id} value={store.id}> {store.storeName}</option>)}
          </select>
        </label>
        <label>
          Group
          <select value={groupId} required onChange={(e) => setGroupId(e.target.value)}>
            <option></option>
            {groupsArr.map(group => <option key={group.id} value={group.id}> {group.groupName}</option>)}
          </select>
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}




export default CreateEventPage;
