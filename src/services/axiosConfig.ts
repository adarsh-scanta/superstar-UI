import axios from "axios";

// <<<<<<< anjani
// const instance = axios.create({ baseURL: "http://localhost:4001/" });
const instance = axios.create({

  baseURL: process.env.REACT_APP_BASE_URL,

  validateStatus: function validateStatus(status) {
    let default_ = status >= 200 && status < 300;
    let extra1 = status === 404;
    let extra2 = status === 400;
    return default_ || extra1 || extra2;
  },
});
instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  "Authorization-token"
)}`;

export default instance;
