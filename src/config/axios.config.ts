import axios from 'axios'

const BASE_URL = 'https://api.jikan.moe/v4'

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
})

axiosConfig.interceptors.request.use(
  request => {
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
