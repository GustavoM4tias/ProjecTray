import axios from 'axios';

const API_URL = 'http://api.exemplo.com/produtos';

export default {
  getAll(page = 1, limit = 10) {
    return axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  },
};
