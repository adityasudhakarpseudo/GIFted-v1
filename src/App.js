import React from 'react';
import './App.scss';

/**
 * Import React & Redux here
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

/**
 * redux-thunk is used to dispatch async methods inside redux
 */
import thunk from 'redux-thunk';


import Landing from './components/app_gifted/Landing/Landing';

// const store = createStore(
//   applyMiddleware(thunk)
// );

function App() {
  return (
    
      <Landing></Landing>
    
  );

}

export default App;


