/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export function* updateNotificationSettings(action) {
  let resp;
  yield api
    .post("/api/update-notification-details", action.payload)
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
