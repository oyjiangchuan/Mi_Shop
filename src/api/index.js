// 封装axios
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 的配置
axios.defaults.timeout = 10000 // 设置默认的请求时常为10s
// axios.defaults.baseURL = 'http://localhost:8080' // 设置基础的Url请求地址

// 返回状态(响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) { // 服务器可以请求的 但是返回不成功
    alert('网络异常1')
    return Promise.reject(res)
  }
  return res
}, (error) => { // 服务器崩了 无法请求
  alert('网络异常2')
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

export default {
  Login(params) {
    return new Promise((resolve, reject) => {
      axios({ // axios请求的写法
        url: 'http://localhost:3000/users/userLogin',
        method: 'post',
        data: {
          ...params
        }
      }).then((res) => {
        // console.log(res)
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  Register(params) {
    return new Promise((resolve, reject) => {
      axios({ // axios请求的写法
        url: 'http://localhost:3000/users/userRegister',
        method: 'post',
        data: {
          ...params
        }
      }).then((res) => {
        // console.log(res)
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}