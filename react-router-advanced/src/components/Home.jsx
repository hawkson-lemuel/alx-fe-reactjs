import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
