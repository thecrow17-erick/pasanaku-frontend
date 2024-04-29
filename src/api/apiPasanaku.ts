import axios from 'axios'

export const pasanakuAxios = axios.create({
  baseURL: "http://localhost:3001/api/"
})