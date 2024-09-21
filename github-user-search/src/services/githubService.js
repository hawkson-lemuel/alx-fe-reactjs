import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location, repos, page = 1, perPage = 30) => {
    console.log("Triggered");

    const queryParts = [];
    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    if (repos) queryParts.push(`repos:>${repos}`);

    const query = queryParts.join(' ');

    try {
        const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=${perPage}`);
        return {
            totalCount: response.data.total_count,
            items: response.data.items,
        };
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};
