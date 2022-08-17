import axios from 'axios';

const Api = axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_KEY
    }
})
export default Api;