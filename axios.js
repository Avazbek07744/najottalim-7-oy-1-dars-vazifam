import axios from "axios"

const lord = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})
lord.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorizzation = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)




export default lord;