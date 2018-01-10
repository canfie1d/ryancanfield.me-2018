import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';

function number(state = { value: 0 }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'ADD_NUMBER':
      newState.value++;
      break;
    case 'SUBTRACT_NUMBER':
      --newState.value;
      break;
    default:
      return state;
  }

  return newState;
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
  number,
  routing: routerReducer,
});
