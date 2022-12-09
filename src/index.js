import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import masterReducer from './reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// We can use Redux to create a global 'store' that will hold all of our different state values
let myStore = createStore(masterReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

// After creating the store, we need to make sure we wrap our app with a 'Provider' so that it has access
// to all of the different state 'variables'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

