import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1, perPage = 30) => {
    console.log("Triggered");

    const queryParts = [];
    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>${minRepos}`);

    const query = queryParts.join(' ');

    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`);
        return {
            totalCount: response.data.total_count,
            items: response.data.items,
        };
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};
