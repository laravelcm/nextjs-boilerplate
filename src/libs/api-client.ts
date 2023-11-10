import Axios from 'axios'

import { API_HOST } from '@shared/environment'

const apiClient = Axios.create({
  baseURL: API_HOST,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default apiClient
