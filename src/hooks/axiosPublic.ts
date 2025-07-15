import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default axiosPublic;