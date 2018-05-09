import { combineReducers } from 'redux';
import CoinReducer from './coin_reducers';

const rootReducer = combineReducers({
  coins: CoinReducer,
});

export default rootReducer;