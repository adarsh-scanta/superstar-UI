/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* verifyForgotToken(action) {
  let resp;
  yield api
    .get(
      `/users/change-password/${action.payload.user_id}/${action.payload.token}`
    )
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
