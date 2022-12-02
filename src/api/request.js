import store from '@/store';
import axios from 'axios';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use(config => {
    nprogress.start();
    if (store.state.detail.uuid) {
        config.headers.userTempId = store.state.detail.uuid;
    }
    if (store.state.login.token) {
        config.headers.token = store.state.login.token;
    }
    nprogress.start();
    return config;
})

request.interceptors.response.use(res => {
    nprogress.done();   
    return res.data;
}, error => {
    console.log('响应失败' + error);
    return Promise.reject(new Error('failed'));
})

export default request;