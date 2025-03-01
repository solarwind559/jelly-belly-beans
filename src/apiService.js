import axios from "axios";

const API_BASE_URL = "https://jellybellywikiapi.onrender.com/api";

const apiService = {
  getBeans(params = {}) {
    return axios.get(`${API_BASE_URL}/beans`, { params });
  },
  getBeanById(id) {
    return axios.get(`${API_BASE_URL}/beans/${id}`);
  },
  getFacts() {
    return axios.get(`${API_BASE_URL}/facts`);
  },
  getRecipes() {
    return axios.get(`${API_BASE_URL}/recipes`);
  },
  getRecipeById(id) {
    return axios.get(`${API_BASE_URL}/recipes/${id}`);
  },
  getCombinations() {
    return axios.get(`${API_BASE_URL}/combinations`);
  },
  getCombinationId(id) {
    return axios.get(`${API_BASE_URL}/combinations/${id}`);
  },
  getMileStones() {
    return axios.get(`${API_BASE_URL}/milestones`);
  },
};

export default apiService;
