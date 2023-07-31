/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import axios from "axios";

export function* getNFTs(action) {
  let resp;
  yield axios
    .get(
      "https://api.better-call.dev/v1/contract/hangzhou2net/KT1GQ2B39PcjCn8FaDof7QBhoLoLgAWae87j/tokens",
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
