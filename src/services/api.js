import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (typeof window !== "undefined" &&
  /(^|\.)adverrahub\.com$/i.test(window.location.hostname)
    ? "https://api.adverrahub.com/api"
    : "http://127.0.0.1:8000/api");
const TOKEN_KEY = "cms_auth_token";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export const authApi = {
  async login(username, password) {
    const { data } = await api.post("/auth/login/", { username, password });
    localStorage.setItem(TOKEN_KEY, data.token);
    return data;
  },
  async me() {
    const { data } = await api.get("/auth/me/");
    return data;
  },
  async updateMe(payload) {
    const { data } = await api.put("/auth/me/", payload);
    return data;
  },
  async changePassword(payload) {
    const { data } = await api.post("/auth/change-password/", payload);
    if (data.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    return data;
  },
  async listUsers() {
    const { data } = await api.get("/auth/users/");
    return data;
  },
  async createUser(payload) {
    const { data } = await api.post("/auth/users/", payload);
    return data;
  },
  async updateUser(userId, payload) {
    const { data } = await api.put(`/auth/users/${userId}/`, payload);
    return data;
  },
  async logout() {
    try {
      await api.post("/auth/logout/");
    } finally {
      localStorage.removeItem(TOKEN_KEY);
    }
  },
  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export const cmsApi = {
  async listPages() {
    const { data } = await api.get("/cms/pages/");
    return data;
  },
  async updatePage(pageKey, payload) {
    const { data } = await api.put(`/cms/pages/${pageKey}/`, payload);
    return data;
  },
  async getPublicEdits() {
    const { data } = await api.get("/cms/public-edits/");
    return data;
  },
  async trackInteraction(payload) {
    const { data } = await api.post("/cms/track-interaction/", payload);
    return data;
  },
  async getDashboardStats(params = {}) {
    const { data } = await api.get("/cms/dashboard-stats/", { params });
    return data;
  },
};
