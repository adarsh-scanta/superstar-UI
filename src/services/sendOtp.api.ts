/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* sendOtp(action) {
  let resp;
  yield api
    .post("/users/send-otp", action.payload)
    .then((response) => {
      resp = response;
      if (response.status === 200 && response.data?.message === "OTP sent.") {
        toast.success(response.data?.message);
      } else if (
        response.status === 400 &&
        response.data === "Email already Registered, Please login."
      ) {
        toast.error(response.data);
      }
    })
    .catch((error) => {
      resp = error;
    });
  return resp;
}
