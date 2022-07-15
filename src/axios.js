import axios from 'axios';

export default URL = axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_KEY
    }
})