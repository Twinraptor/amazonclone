import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ff56c.cloudfunctions.net/api",
  // "http://localhost:5001/clone-ff56c/us-central1/api",
});

export default instance;
