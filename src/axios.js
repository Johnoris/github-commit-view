import axios from 'axios';

export default URL = axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: 'Johnoris',
        password: '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'
    }
})