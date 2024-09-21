import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
