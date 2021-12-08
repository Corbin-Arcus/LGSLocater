import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user)

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
    </nav>
    )
  }

  return (
    <ul>
      <li className='navbar'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to='/events'>Events</NavLink>
        <NavLink exact to='/events/new'>Create a new Event</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );

}

export default Navigation;
