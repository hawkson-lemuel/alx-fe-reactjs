import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (username, location, repos, page) => {
    setLoading(true);
    setError(false);
    try {
      const { totalCount, items } = await fetchUserData(username, location, repos, page);
      setUsers((prevUsers) => (page === 1 ? items : [...prevUsers, ...items]));
      setTotalCount(totalCount);
    } catch (error) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() || location.trim() || repos) {
      setPage(1); // Reset to the first page
      handleSearch(username, location, repos, 1);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleSearch(username, location, repos, nextPage);
  };

  const hasMore = users.length < totalCount;

  return (
    <div className="home-page">
      <span>
        <h2>GitHub User Search</h2>
        <form onSubmit={handleSubmit} className="search-bar flex flex-col gap-4 p-4">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Location (e.g., San Francisco)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
          <input
            type="number"
            placeholder="Minimum Repos"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn bg-blue-500 text-white rounded-lg p-2">
            Search
          </button>
        </form>
      </span>
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', overflow: 'auto' }}>
        {users.length > 0 && users.map(user => (
          <div className="user-card p-4 border shadow-lg flex flex-col items-center" key={user.login}>
            <img src={user.avatar_url} alt={user.login} className="avatar w-24 h-24 rounded-full" />
            <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Public Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View GitHub Profile
            </a>
          </div>
        ))}
        {hasMore && (
          <button onClick={loadMore} className="btn bg-blue-500 text-white rounded-lg p-2 mt-4">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
