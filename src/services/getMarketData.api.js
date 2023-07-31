/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import axios from "axios";

export function* getMarketData(action) {
  let resp;
  yield axios
    .get(
      "https://api.mainnet.tzkt.io/v1/bigmaps/121049/keys",
      action.payload
    )
    .then((response) => {
      resp = response;
    })
    .catch((error) => {
      resp = error;
    });
  return resp;
}
