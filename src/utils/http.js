import axios from "axios"
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user"


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data, e => {
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    return Promise.reject(e)
})

export default httpInstance




