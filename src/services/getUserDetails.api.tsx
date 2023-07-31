/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";

export function* getUserDetails(action) {
  let resp;
  yield api
    .get("users/current", action.payload)
    .then((response) => {
      resp = response;
      localStorage.setItem("user-data", JSON.stringify(resp.data));
    })
    .catch((error) => {
      resp = error;
    });
  return resp;
}
