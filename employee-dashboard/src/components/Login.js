// src/components/Login.js
import React from 'react';

export function Login({ username, setUsername, onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>LogIn</h2>
        <p>Sign in to manage your workspace</p>
        <form onSubmit={onLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}