import React from 'react';
/**
 * Import React & Redux here
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

/**
 * redux-thunk is used to dispatch async methods inside redux
 */
import thunk from 'redux-thunk';

/**
 * Import reducers here (after combining)
 */
import rootReducer from './redux/index';

/**
 * Import Components here
 */
import LandingPage from './app_gifted/Landing/Landing';

/**
 * Set up environment
 * defaults to development
 * falls to production when in production
 */
global.ENV = process.env.NODE_ENV;

/**
 * Set up React and ReactDOM libraries into global window
 */
global.React = require('react');
global.ReactDOM = require('react-dom');


/**
 * Create a store for Dashboard from the reducers imported
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

// create new pr store here
let LandingPageComponent = props => {
  return (
    <Provider store={store}>
      <LandingPage params={props}/>
    </Provider>
  );
};

/**
 * exports
 */
export { 
  LandingPageComponent as LandingPage
};
