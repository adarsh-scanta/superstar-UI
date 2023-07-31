/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* updateUserPhone(action) {
  let resp;
  yield api
    .post("/api/update-user-details/mobile-number", action.payload)
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
