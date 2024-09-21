import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};

export const outputApiKey = () => {
    console.log(process.env);
    return `here ${process.env.REACT_APP_GITHUB_API_KEY}`;
}
