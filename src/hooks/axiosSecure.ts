import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default axiosSecure;