/**
 * Import actions here
 */
import {
    FETCH_TRENDING_GIF_REQUEST,
    FETCH_TRENDING_GIF_SUCCESS,
    FETCH_TRENDING_GIF_ERROR
  } from '../actions/trendingGIF';
  
  /**
  * Set up initial state (not mandatory)
  */
  const initialState = {
    result: {},
    loading: false,
    error: null,
  };
  
  /**
  * @function trendingGIFReducer
  * A reducer to reduce menu data subscribed - actions
  * @param {*} state - The default state
  * @param {*} action - The dispatched actions
  * @returns {Object} - The respective state w.r.t the action dispatched
  */
  let trendingGIFReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_TRENDING_GIF_REQUEST:
          // Mark the state as "loading" so we can show a spinner or something
          // Also, reset any errors. We're starting fresh.
          return {
             ...state,
             loading: true,
             error: null,
          };
  
       case FETCH_TRENDING_GIF_SUCCESS:
          // All done: set loading "false".
          // Also, replace the items with the ones from the server      
          return {
             ...state,
             loading: false,
             result: action.payload,
          };
  
       case FETCH_TRENDING_GIF_ERROR:
          // The request failed, but it did stop, so set loading to "false".
          // Save the error, and we can display it somewhere
          // Since it failed, we don't have items to display anymore, so set it empty.
          // This is up to you and your app though: maybe you want to keep the items
          // around! Do whatever seems right.
          return {
             ...state,
             loading: false,
             error: action.payload,
             result: {},
          };
  
       default:
          // ALWAYS have a default case in a reducer
          return state;
    }
  };
  
  export default trendingGIFReducer;