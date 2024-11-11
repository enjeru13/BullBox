import axios from "axios";

const instance = axios.create({
  baseURL: "https://bull-box-back.vercel.app/api",
  withCredentials: true,
});

export default instance;
