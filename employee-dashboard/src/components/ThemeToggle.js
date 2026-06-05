// src/components/ThemeToggle.js
import React, { useContext, useLayoutEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ThemeToggle = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useLayoutEffect(() => {
    // Dynamically update body background based on theme before DOM paints
    if (state.theme === 'dark') {
      document.body.style.backgroundColor = '#1e1e24';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#f4f5f7';
      document.body.style.color = '#000000';
    }
  }, [state.theme]);

  return (
    <button 
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      style={{ padding: '8px 16px', cursor: 'pointer', margin: '10px 0' }}
    >
      Switch to {state.theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
    </button>
  );
};