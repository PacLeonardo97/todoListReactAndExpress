import axios from "axios";

const api = axios.create({
    baseURL: "http://www.localhost:8080",
});

export default api;