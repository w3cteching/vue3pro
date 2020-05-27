// 基本不用封装，只是对请求的接口地址，超时，报错处理
import Axios from 'axios'

console.log('request.js中的环境变量:', process.env.BUILD_ENV)

// 针对npm run 来自动读取不同环境变量

const configEnv = require(`../build/${process.env.BUILD_ENV}.js`);
// 创建axios实例
const service = Axios.create({
  baseURL: configEnv.BASE_URL,
  timeout: 3000
})

// 请求拦截
service.interceptors.request.use(config => {
  // config.headers['x-token'] = 'asfasdf35235aefaefkaslj23523523523523'
  // console.log('请求被拦截:', config)
  return config;
}, _error => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('请求出错，请检查')
})

// 响应拦截
service.interceptors.response.use(res => {
  console.log('响应拦截')
  return res;
}, error => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('出错啦', error)
})

export default service
