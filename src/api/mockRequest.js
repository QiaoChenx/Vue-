import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const mockRequest = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

mockRequest.interceptors.request.use(config => {
    nprogress.start();
    return config;
})

mockRequest.interceptors.response.use(res => {
    nprogress.done();
    return res.data;
}, error => {
    alert('数据响应失败' + error);
    return Promise.reject(new Error('failed'));
})

export default mockRequest;