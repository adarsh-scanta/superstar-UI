/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* updateUserPassword(action) {
  let resp;
  yield api
    .post(`/users/update-password`, action.payload)
    .then((response) => {
      resp = response;
      if (response.status === 200) {
      } else {
        toast.error(resp.data);
      }
    })
    .catch((error) => {
      resp = error;
      toast.error(resp.data);
    });
  return resp;
}
