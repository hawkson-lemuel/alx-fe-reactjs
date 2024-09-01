import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './useAuth';
import './styles.css';

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <div className="page-wrapper">
        <div className="authenticator-wrapper">
          <button className="toggle-auth" onClick={isAuthenticated ? logout : login}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
