import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Your base API URL
});

export async function registerUser(formData) {
  try {
    const response = await api.post("user/register/", formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      console.error("Error:", error.message);
    }
  }
}
