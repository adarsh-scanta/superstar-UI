/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* signup(action) {
  let resp;
  yield api
    .post("/users/register", action.payload)
    .then((response) => {
      if (response.status === 404) {
        toast.error("Sign-up Error");
      } else if (response.status === 400) {
        toast.error(response.data.message);
      } else {
        resp = response;
      }
    })
    .catch((error) => {
      resp = error;

      // toast.error("Error in Sign-up");
    });
  return resp;
}
