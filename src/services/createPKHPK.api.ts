/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

export function* createPKHPK(action) {
  let resp;
  yield axios
    .get(`http://localhost:3000/accounts/create-account`)
    .then((response) => {
      if (response.status === 404) {
      } else { 
        resp = response;
        toast.success("PKH PK created");
      }
    })
    .catch((error) => {
      resp = error;
      // toast.error("Failed to delete!");
    });
  return resp;
}
