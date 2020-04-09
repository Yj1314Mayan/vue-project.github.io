import axios from 'axios'
import Message from 'element-ui'

const beseURL = ''

axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: beseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

axios.interceptors.request.use(config => {
  // 请求前的一些封装逻辑
  return config
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)

// post 请求封装
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        if (response.data.code === 200) {
          resolve(response.data.data)
        } else {
          Message.error(response.data.msg)
        }
      },
      err => {
        reject(err)
        let message = '请求失败！请检查网络'
        if (err.response) message = err.response.data.message
        Message.error(message)
      }
    )
  })
}

// get 请求封装
export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(
      response => {
        if (response.data.code === 200) {
          resolve(response.data.data)
        } else {
          Message.error(response.data.msg)
        }
      },
      err => {
        reject(err)
        let message = '请求失败！请检查网络'
        if (err.response) message = err.response.data.message
        Message.error(message)
      }
    )
  })
}

export default {
  post,
  get
}
