import Axios from 'axios'
import { API_HOST } from '@shared/environment'

const axios = Axios.create({
  baseURL: API_HOST,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

export default axios
