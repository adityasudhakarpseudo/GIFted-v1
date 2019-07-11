/**
 * Import dependencies
 */
import { combineReducers } from 'redux';

/**
 * Import reducers here
 */

import trendingGIFReducer  from './app_gifted/Landing/reducers/trendingGIFReducer';
import GIFByKeywordReducer from './app_gifted/Landing/reducers/GIFByKeywordReducer';

/**
 * Combine all the reducers and export
 */
export default combineReducers({
    trendingGIFReducer,
    GIFByKeywordReducer
});