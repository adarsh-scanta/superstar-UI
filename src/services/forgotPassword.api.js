/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* forgotPassword(action) {
  let resp;
  yield api
    .get(`/users/forget-password/${action.payload.email}`)
    .then((response) => {
      resp = response;
      if (
        response.status === 200 &&
        response.data?.message ===
          "password reset link sent to your email account"
      ) {
        toast.success(response.data?.message);
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
