import axiosInstance from "@/utils/axios-config";

export const userService = {
  // Get user by ID
  async getUserById(userId) {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("[GET User Error]", error);
      throw error;
    }
  },

  // Update user profile
  async updateUserProfile(userId, userData) {
    try {
      const response = await axiosInstance.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error("[UPDATE User Error]", error);
      throw error;
    }
  },

  // Update user password
  async updateUserPassword(userId, passwordData) {
    try {
      const response = await axiosInstance.put(
        `/users/${userId}/password`,
        passwordData
      );
      return response.data;
    } catch (error) {
      console.error("[UPDATE Password Error]", error);
      throw error;
    }
  },

  // Update user points
  async updateUserPoints(userId) {
    try {
      const response = await axiosInstance.put(`/users/${userId}/points`);
      return response.data;
    } catch (error) {
      console.error("[UPDATE Points Error]", error);
      throw error;
    }
  },
};
