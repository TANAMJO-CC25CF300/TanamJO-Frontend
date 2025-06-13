import axios from "axios";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Create axios instance with base URL
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Add timeout
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Ubah ke false karena kita tidak menggunakan credentials
});

// Function to handle logout
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

// Add request interceptor to add token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
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

// Add response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Tidak dapat terhubung ke server. Mohon periksa koneksi internet Anda."
      );
    }

    if (error.response?.status === 401) {
      // Token is invalid or expired
      handleLogout();
      throw new Error("Sesi Anda telah berakhir. Silakan login kembali.");
    }

    if (error.response?.status === 500) {
      throw new Error(
        "Terjadi kesalahan pada server. Mohon coba beberapa saat lagi."
      );
    }

    throw new Error(
      error.response?.data?.message || "Terjadi kesalahan. Mohon coba lagi."
    );
  }
);

export default axiosInstance;
