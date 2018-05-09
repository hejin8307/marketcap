import axios from 'axios';

const COIN = "https://api.coinmarketcap.com/v2/ticker/";

export const FETCH_COIN = "FETCH_COIN";
export const FETCH_COIN_DETAIL = "FETCH_COIN_DETAIL";

export function fetchCoin() {
  const url = `${COIN}`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}

export function fetchCoinDetail(id) {
  const url = `${COIN}${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN_DETAIL,
    payload: request,
    mode: 'cors'
  };
}
