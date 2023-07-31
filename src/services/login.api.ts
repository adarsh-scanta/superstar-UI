/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";
import { toast } from "react-toastify";

export  function* login(action) {
  let resp;
  yield  api
    .post("/users/authenticate", action.payload)
    .then((response) => {
      if (response.status === 404) {
        toast.error("Log-in Error");
      } else if (response.status === 400) {
        // console.log(response.message);
        toast.error(response.data.message);
      } else { 
        resp = response; 
        const expiryTime = new Date().setDate(new Date().getDate() + 7);
        localStorage.setItem("Authorization-token", resp.data.token);
        localStorage.setItem("expiry-time", JSON.stringify(expiryTime)); 
        localStorage.setItem("user-data", JSON.stringify(resp.data));
        toast.success("Logged-in Successfully");
        window.location.reload();
      }
    })
    .catch((error) => {
      // resp = error;
      // toast.error("Invalid email or password");
      return error;
    });
  return resp;
}
