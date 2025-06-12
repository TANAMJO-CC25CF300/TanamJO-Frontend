import axios from "axios";

const API_URL = "http://localhost:4545";

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
    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Unable to connect to server. Please check if the server is running."
      );
    }
    if (error.response) {
      // Handle authentication errors
      if (error.response.status === 401) {
        // Clear token and redirect to login if unauthorized
        localStorage.removeItem("token");
        window.location.href = "/login";
        throw new Error("Session expired. Please login again.");
      }
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || "Server error occurred");
    }
    throw error;
  }
);

export const plantService = {
  // Get all plants for a user
  async getUserPlants(userId) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login to view your plants");
      }

      // Changed endpoint to match backend
      const response = await api.get(`/plants?userId=${userId}`);

      // Check if response.data is an array
      if (!Array.isArray(response.data)) {
        // If it's a single object, wrap it in an array
        const plantData = response.data ? [response.data] : [];

        // Transform the data to match frontend requirements
        return plantData.map((plant) => ({
          ...plant,
          plant_age: plant.ageInput || "0", // Map ageInput to plant_age for frontend
          phase: plant.phase || "preparation", // Provide default phase if not set
        }));
      }

      // If it's already an array, transform it
      return response.data.map((plant) => ({
        ...plant,
        plant_age: plant.ageInput || "0",
        phase: plant.phase || "preparation",
      }));
    } catch (error) {
      console.error("[GET Plants Error]", error);
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Failed to fetch plants. Please try again.");
    }
  },

  // Add new plant
  async addPlant(userId, plantData) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login to add a plant");
      }

      // Transform the data to match backend requirements
      const transformedData = {
        name: plantData.name,
        ageInput: plantData.age, // Transform 'age' to 'ageInput'
        description: plantData.description,
        phase: plantData.phase,
        userId: userId,
      };

      const response = await api.post("/plants", transformedData);

      // Transform the response data to match frontend requirements
      return {
        ...response.data,
        plant_age: response.data.ageInput || "0",
        phase: response.data.phase || "preparation",
      };
    } catch (error) {
      console.error("[POST Plant Error]", error);
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Failed to add plant. Please try again.");
    }
  },
};
