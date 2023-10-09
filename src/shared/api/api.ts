import axios from "axios";


const instance = axios.create({
    baseURL: process.env["API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
    },
});

axios.interceptors.request.use(request => {
    const token = localStorage.getItem("token") || "";
    request.headers.Authorization = "Bearer " + token;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
export default instance;