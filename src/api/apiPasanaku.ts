import axios from 'axios'

export const pasanakuAxios = axios.create({
  baseURL: "http://localhost:8080/api/"
})