import axios from "axios";

const instance = axios.create({
    baseURL: process.env["API_BASE_URL"],
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default instance;