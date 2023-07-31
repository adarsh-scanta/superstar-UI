/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* updatePassword(action) {
  let resp;
  yield api
    .put(`/users/${action.payload.id}`, action.payload)
    .then((response) => {
      if (response.status === 404) {
        toast.error("Failed to update password!");
      } else {
        resp = response;
        toast.success("Password updated successfully!");
      }
    })
    .catch((error) => {
      resp = error;
      toast.error("Failed to update password!");
    });
  return resp;
}
