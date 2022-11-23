import axios from 'axios'

const api = axios.create({
    baseURL: "https://637cfff416c1b892ebc53a5c.mockapi.io"
})

export default api