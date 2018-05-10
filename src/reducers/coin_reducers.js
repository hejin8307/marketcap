import { FETCH_COIN } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case `${FETCH_COIN}_FULFILLED`:
      return action.payload.data.data;
    default:
      return state;
  }
}