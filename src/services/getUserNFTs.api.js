/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import axios from "axios";

export function* getUserNFTs(action) {
  let resp;
  yield axios
    .get(`https://api.tzkt.io/v1/tokens/balances?account=${action.payload}`
      // `https://api.better-call.dev/v1/account/mainnet/${action.payload}/token_balances`
    )
    .then((response) => {
      resp = response;
    })
    .catch((error) => {
      resp = error;
    });
  return resp;
}
