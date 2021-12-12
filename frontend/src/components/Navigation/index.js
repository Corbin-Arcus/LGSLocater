import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const demo = () => {
    const user = {
      credential: 'demo@aa.io',
      password: 'demo'
    }
    dispatch(sessionActions.login(user))
  }

  let sessionLinks;

  if(sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser}/>
      </>
    );
  }else {
    sessionLinks = (
      <nav className='loginNavbar'>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to='/' onClick={() => demo()}>Demo Login</NavLink>
    </nav>
    )
  }

  return (
    <ul>
      <li className='navbar'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to='/events'>Events</NavLink>
        {sessionUser &&
          <NavLink exact to='/events/new'>Create a new Event</NavLink>
        }
        <NavLink exact to='/groups'>Groups</NavLink>
        {sessionUser &&
          <NavLink exact to='/groups/new'>Create a new Group</NavLink>
        }
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );

}

export default Navigation;
