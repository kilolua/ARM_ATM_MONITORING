import axios, { AxiosRequestConfig } from 'axios'

export const API_URL = 'http://192.168.2.148:34001'

const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  // @ts-ignore
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default $api
