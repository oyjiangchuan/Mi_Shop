// 封装axios
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 的配置
axios.defaults.timeout = 10000 // 设置默认的请求时常为10s
axios.defaults.baseURL = 'http://localhost:3000' // 设置基础的Url请求地址

// 返回状态(响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) { // 服务器可以请求的 但是返回不成功
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => { // 服务器崩了 无法请求
  alert('网络异常')
  return Promise.reject(error)
})

// 封装axios.get方法
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}