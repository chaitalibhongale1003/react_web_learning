// src/components/Login.js
import React from 'react';

export function Login({ username, setUsername, onLogin }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
    }}>
      <div style={{
        width: '100%', maxWidth: '400px', padding: '40px 30px', 
        backgroundColor: '#ffffff', borderRadius: '16px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#1f2937', marginBottom: '8px', fontWeight: '700' }}>LogIn</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '30px' }}>Sign in to manage your workspace</p>
        <form onSubmit={onLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={{
              width: '100%', padding: '12px 16px', margin: '12px 0', boxSizing: 'border-box',
              border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '15px', outline: 'none',
              transition: 'all 0.2s', backgroundColor: '#f9fafb'
            }}
          />
          <button type="submit" style={{
            width: '100%', padding: '12px', marginTop: '15px', border: 'none', borderRadius: '8px',
            backgroundColor: '#4f46e5', color: '#ffffff', fontSize: '16px', fontWeight: '600',
            cursor: 'pointer', transition: 'background-color 0.2s', boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.4)'
          }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}