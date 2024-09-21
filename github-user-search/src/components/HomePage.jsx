import React, { useState } from 'react';
import Search from './Search';
import { fetchUserData } from '../services/githubService';

const HomePage = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData(username);
      console.log(data)
      setUsers(data);
    } catch (error) {
      setError(true);
      setUsers(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
        <span >
            <h2>GitHub User Search</h2>
            <Search onSearch={handleSearch} />
        </span>
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      <div style={{backgroundColor:'green', height:'80vh',overflow:'auto'}}>
        {users && !loading && !error && users.map(user=>(
                <div className="user-card">
                <img src={user.avatar_url} alt={user.login} className="avatar" />
                <h2>{user.name}</h2>
                <p>{user.login}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
                </div>

            )) 
            }
      </div>
    </div>
  );
};

export default HomePage;
