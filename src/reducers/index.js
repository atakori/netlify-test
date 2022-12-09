// This file puts together all of your various reducers into one 'Super' reducer
// With it, you will be able to reference all of your different states by using the
// keys that you specify in the masterReducer
// Example - Counter Number --> state.counter | logged in status = state.loggedIn

import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedInReducer from "./loggedIn";

const masterReducer = combineReducers({
    counter: counterReducer,
    loggedIn: loggedInReducer
})

export default masterReducer;