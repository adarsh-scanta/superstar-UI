/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

export function* buyNFT(action) {
  let resp;
  toast.info("Purchase in progress...");
  yield api
    .post("/market-place/buy", action.payload)
    .then((response) => {
      resp = response;
      resp.status >= 200 && resp.status <= 300
        ? toast.success("Purchased Successfully!")
        : toast.error("Failed to purchase!");
    })
    .catch((error) => {
      resp = error;
    });
  return resp;
}
