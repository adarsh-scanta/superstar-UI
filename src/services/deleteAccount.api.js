/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* deleteAccount(action) {
  let resp;
  yield api
    .delete(`/users/${action.payload.id}`, action.payload)
    .then((response) => {
      if (response.status === 404) {
        toast.error("Failed to delete");
      } else {
        resp = response;
        localStorage.removeItem("Authorization-token");
        window.location.reload();
      }
    })
    .catch((error) => {
      resp = error;
      // toast.error("Failed to delete!");
    });
  return resp;
}
