/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* updateUserDetails(action) {
  let resp;
  yield api
    .put(`users/${action.payload.id}`, action.payload)
    .then((response) => {
      resp = response;
      toast.success("Updated Successfully!");
    })
    .catch((error) => {
      resp = error;
      toast.error("Failed to Update!");
    });
  return resp;
}
