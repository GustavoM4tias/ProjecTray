import axios from 'axios';

const API_URL = 'https://localhost:7205/produtos';

export default {
  getAll(page = 1, limit = 12) {
    return axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  },
};
