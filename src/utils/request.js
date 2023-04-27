import axios from 'axios';
import {pinia} from "@/main";
import {useUserStore} from "@/stores/user";
import store from '@/store'
import {BASE_URL} from '@/constant'
const service = axios.create({
    baseURL: BASE_URL + '/api/v1',
    timeout: 5000
})
// 请求拦截器
// Request interceptor
service.interceptors.request.use(
    (config) => {
      const userStore = useUserStore(pinia);
        if (userStore.token) {
            // 让每个请求携带自定义token 请根据实际情况自行修改
            // Let each request carry a custom token
            config.headers.Authorization = userStore.token
        }
        if (config.headers['Content-Type'] === undefined || config.headers['Content-Type'] === '') {
            config.headers['Content-Type'] = 'application/json'
        }
        return config // 必须返回配置
    },
    (error) => {
      console.log(error, 'error');
        return Promise.reject(error)
    }
)
// 响应拦截器
// Response interceptor
service.interceptors.response.use(
    response => {
        console.log(response)
        return response.data
    },
    error => {
      console.log(error, 'err')
      if (error.code === "ERR_BAD_REQUEST"){
        return Promise.reject({
          message: error.response.data.error
        })
      }
        //return Promise.reject(error)
    }
)

export default service