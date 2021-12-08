import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EventPage from "./components/EventsPage";
import CreateEventPage from "./components/CreateEventPage";
import EventByIdPage from "./components/EventByIdPage";
import EditEventPage from "./components/editEventPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/events'>
            <EventPage />
          </Route>
          <Route path='/events/new'>
            <CreateEventPage />
          </Route>
          <Route exact path='/events/:id'>
            <EventByIdPage />
          </Route>
          <Route exact path='/events/:id/editEvent'>
            <EditEventPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
