import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Tidak dapat terhubung ke server. Mohon periksa koneksi internet Anda."
      );
    }

    if (error.response) {
      // Handle authentication errors
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        throw new Error("Sesi Anda telah berakhir. Silakan login kembali.");
      }

      // Handle server errors
      if (error.response.status === 500) {
        throw new Error(
          "Terjadi kesalahan pada server. Mohon coba beberapa saat lagi."
        );
      }

      // Handle other errors
      throw new Error(
        error.response.data?.message || "Terjadi kesalahan. Mohon coba lagi."
      );
    }

    throw new Error("Terjadi kesalahan yang tidak diketahui. Mohon coba lagi.");
  }
);

export const plantService = {
  // Get all plants for a user
  async getUserPlants(userId) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Silakan login untuk melihat tanaman Anda");
      }

      const response = await api.get(`/plants?userId=${userId}`);

      // Transform response data
      if (response.data && response.data.status === "success") {
        const plants = response.data.data || [];
        return plants.map((plant) => ({
          ...plant,
          plant_age: plant.ageInput || "0",
          phase: plant.phase || "preparation",
        }));
      }

      return [];
    } catch (error) {
      console.error("[GET Plants Error]", error);
      throw error;
    }
  },

  // Add new plant
  async addPlant(userId, plantData) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Silakan login untuk menambahkan tanaman");
      }

      const transformedData = {
        name: plantData.name,
        ageInput: plantData.age,
        description: plantData.description,
        phase: plantData.phase,
        userId: userId,
      };

      const response = await api.post("/plants", transformedData);

      if (response.data && response.data.status === "success") {
        return {
          ...response.data.data,
          plant_age: response.data.data.ageInput || "0",
          phase: response.data.data.phase || "preparation",
        };
      }

      throw new Error("Gagal menambahkan tanaman");
    } catch (error) {
      console.error("[POST Plant Error]", error);
      throw error;
    }
  },
};
