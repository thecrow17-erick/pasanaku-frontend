import axios from 'axios'

export const pasanakuAxios = axios.create({
  baseURL: "http://www.ficct.uagrm.edu.bo:3001/api/"
})