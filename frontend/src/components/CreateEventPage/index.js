import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/events'

function CreateEventPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [eventGame, setEventGame] = useState("");
  const [errors, setErrors] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
    //   setErrors([]);
    //   return dispatch(sessionActions.signup({ email, username, password }))
    //     .catch(async (res) => {
    //       const data = await res.json();
    //       if (data && data.errors) setErrors(data.errors);
    //     });
    // }
    if(name.length < 5 || name.length > 100){
      setErrors(['Event name must be between 5 and 100 characters'])
    }
    else if(eventGame.length < 5 || eventGame.length > 100)
    {
      setErrors(['The event games name must be between 5 and 100 characters'])
    }
    else{
      setErrors([])
      return dispatch(eventActions.createAnEvent({ name, eventGame, storeId }))
        .catch(async (res) => {
          const data = await res.json();
          if(data && data.errors) setErrors(data.errors)
        })
    }
  };

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
          <input
            type="text"
            value={eventGame}
            onChange={(e) => setEventGame(e.target.value)}
            required
          />
        </label>
        <label>
          Store
          <select
            {}

          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}




export default CreateEventPage;
