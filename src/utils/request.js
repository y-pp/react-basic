/*
 * @Description: 
 * @Date: 2021-07-03 12:19:35
 * @Author: 楊皮皮
 */
import axios from 'axios';

const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // withCredentials: true,
    // timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data
        return res;
    },
    (error) => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service