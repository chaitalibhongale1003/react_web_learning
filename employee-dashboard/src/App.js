// src/App.js
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { useFetch } from './hooks/useFetch';
import { Login } from './components/Login';
import { ThemeToggle } from './components/ThemeToggle';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeeList } from './components/EmployeeList';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const { state, dispatch } = useContext(GlobalContext);
  const { data: initialUsers, loading } = useFetch('https://dummyjson.com/users?limit=10');
  
  useEffect(() => {
    if (initialUsers) {
      dispatch({ type: 'HYDRATE_STORAGE', payload: initialUsers });
    }
  }, [initialUsers, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') setIsLoggedIn(true);
  };

  const isDark = state.theme === 'dark';
  const themeClass = isDark ? 'dark' : 'light';

  if (!isLoggedIn) {
    return (
      <Login 
        username={username} 
        setUsername={setUsername} 
        onLogin={handleLogin} 
      />
    );
  }

  return (
    <div className={`app-container ${themeClass}`}>
      <header className={`navbar ${themeClass}`}>
        <div className="nav-left">
          <h2 className="nav-logo">Workforce</h2>
          <span className={`nav-user ${themeClass}`}>
            | Active User: <strong>{username}</strong>
          </span>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <button 
            onClick={() => setIsLoggedIn(false)} 
            className={`logout-btn ${themeClass}`}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          
          {/* Card Frame 1: Form Management */}
          <div className={`card-frame ${themeClass}`}>
            <EmployeeForm 
              currentEmployee={currentEmployee} 
              clearEdit={() => setCurrentEmployee(null)} 
            />
          </div>

          {/* Card Frame 2: Employee List Matrix */}
          <div className={`card-frame ${themeClass}`}>
            <h3 className="card-title">Employee Directory</h3>
            {loading ? (
              <div className="loading-text">Loading secure assets via DummyJSON...</div>
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