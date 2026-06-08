// src/App.js
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { useFetch } from './hooks/useFetch';
import { ThemeToggle } from './components/ThemeToggle';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeeList } from './components/EmployeeList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const { state, dispatch } = useContext(GlobalContext);
  const { data: initialUsers, loading } = useFetch('https://dummyjson.com/users?limit=10');
  
  useEffect(() => {
  if (initialUsers) {
    // Uses HYDRATE_STORAGE to protect existing local edits across reboots
    dispatch({ type: 'HYDRATE_STORAGE', payload: initialUsers });
  }
}, [initialUsers, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') setIsLoggedIn(true);
  };

  const isDark = state.theme === 'dark';

  // Beautiful Login Screen
  if (!isLoggedIn) {
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
          <form onSubmit={handleLogin}>
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

  // Beautiful Dashboard View Layout
  return (
    <div style={{
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh', paddingBottom: '60px', transition: 'all 0.3s'
    }}>
      {/* Dynamic Header Component Bar */}
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 40px', backgroundColor: isDark ? '#111827' : '#ffffff',
        borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#4f46e5' }}>Workforce</h2>
          <span style={{ color: isDark ? '#9ca3af' : '#6b7280', fontSize: '14px' }}>| Active User: <strong>{username}</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ThemeToggle />
          <button onClick={() => setIsLoggedIn(false)} style={{
            padding: '8px 16px', borderRadius: '6px', border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
            backgroundColor: 'transparent', color: isDark ? '#f3f4f6' : '#374151', cursor: 'pointer',
            fontSize: '14px', fontWeight: '500', transition: 'all 0.2s'
          }}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Responsive Dashboard Body Wrapper Grid */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          
          {/* Card Frame 1: Form Management */}
          <div style={{
            backgroundColor: isDark ? '#1f2937' : '#ffffff', padding: '25px', borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
          }}>
            <EmployeeForm currentEmployee={currentEmployee} clearEdit={() => setCurrentEmployee(null)} />
          </div>

          {/* Card Frame 2: Employee List Matrix */}
          <div style={{
            backgroundColor: isDark ? '#1f2937' : '#ffffff', padding: '25px', borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Employee Directory</h3>
            {loading ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>Loading secure assets via DummyJSON...</div>
            ) : (
              <EmployeeList onEdit={(emp) => setCurrentEmployee(emp)} />
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;