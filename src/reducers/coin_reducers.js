import { FETCH_COIN, FETCH_COIN_DETAIL } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case `${FETCH_COIN}_FULFILLED`:
      return action.payload.data.data;
    case `${FETCH_COIN_DETAIL}_FULFILLED`:
      return { ...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
}