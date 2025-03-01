import axios from "axios";

export default axios.create({
  baseURL: "https://phimart.vercel.app/api/v1",
});
