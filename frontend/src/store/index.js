import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import eventReducer from "./events";
import sessionReducer from "./session";
import storesReducer from "./stores";
import groupsReducer from "./groups";
import userReducer from "./users";
import userGroupsReducer from "./userGroups";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  event: eventReducer,
  stores: storesReducer,
  groups: groupsReducer,
  user: userReducer,
  userGroups: userGroupsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
