/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* saveToNewsletter(action) {
  let resp;
  yield api
    .get(`/subscribe/${action.payload.email}`)
    .then((response) => {
      resp = response;
      if (response.status === 200) {
        toast.success("Added to Newsletter!");
      } else {
        toast.error("Failed to Add, Try again!");
      }
    })
    .catch((error) => {
      resp = error;
      toast.error("Failed to Add, Try again!");
    });
  return resp;
}
