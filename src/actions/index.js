import axios from 'axios';

const COIN = "https://api.coinmarketcap.com/v2/ticker/";

export const FETCH_COIN = "FETCH_COIN";

export function fetchCoin() {
  const url = `${COIN}/?limit=50`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}
