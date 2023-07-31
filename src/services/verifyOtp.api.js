/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* verifyOtp(action) {
  let resp;
  yield api
    .post("/users/verify-otp", action.payload)
    .then((response) => {
      if (
        response.status === 200 &&
        response.data === "OTP Verified successfully!"
      ) {
        resp = response;
        toast.success(resp.data);
      } else {
        toast.error(response.data);
      }
    })
    .catch((error) => {
      resp = error;
      toast.error("Failed to verify OTP");
    });
  return resp;
}
