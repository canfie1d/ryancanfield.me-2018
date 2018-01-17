import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';

function hintNeeded(state = { hintNeeded: false }, action) {
  if (action.type === 'GIVE_HINT') {
    const newState = Object.assign({}, state);
    newState.hintNeeded = true;
    return newState;
  }

  return state;
}

export default combineReducers({
  browser: createResponsiveStateReducer({
    extraSmall: 479,
    mediumSmall: 639,
    small: 767,
    medium: 1023,
    large: 1279,
    extraLarge: 1399,
  }),
  hintNeeded,
  routing: routerReducer,
});
