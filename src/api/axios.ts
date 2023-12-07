import axios from "axios";

const BASE_URL = "https://dev.api.goongoonalo.com/v1";

export default axios.create({
  baseURL: BASE_URL,
});
