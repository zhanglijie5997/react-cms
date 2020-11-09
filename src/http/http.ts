import axios from 'axios';
import { message } from "antd";
import qs from "qs";
const axiosInit = axios.create({
    // eslint-disable-line
    baseURL: process.env.NODE_ENV === 'production' ? (!window.location.origin.includes('heybooks.net') ? 'https://dev.heybooks.net/front' : 'https://api.heybooks.net/front')  : '/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    
    withCredentials: process.env.NODE_ENV === 'production' ? false : true
});

axiosInit.interceptors.request.use(config => {
    // config.headers['token'] = '';
    return config;
}, err => {
    Promise.reject(err);
});



axiosInit.interceptors.response.use(config => {
    switch (config.data.code) {
        case 200:
            
            break;
        default:
            message.error(config.data.message);
            break;
    }
    return (config.data);
}, err => {
    message.error("网络错误")
    Promise.reject(err);
});


export interface PublicType{
    code: number,
    data: any
}


export const get = (url: string, params: any): any => axiosInit({ url, params, method: 'GET' }) ;

export const post = (url: string, data: any): any => axiosInit({ url, data: qs.stringify(data), method: "POST" }) ;

export const put = (url: string, data: any = {}): any => axiosInit({url, data, method: "PUT"});

export const dele = (url: string, data: any = {}): any => axiosInit({ url, data, method: "DELETE" });