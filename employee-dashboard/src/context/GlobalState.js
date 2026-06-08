// src/context/GlobalState.js
import React, { createContext, useReducer } from 'react';

// Securely check if local cached state exists on structural boot
const savedEmployees = localStorage.getItem('WORKFORCE_REGISTRY_DATA');
const initialEmployees = savedEmployees ? JSON.parse(savedEmployees) : [];

// Initial State
const initialState = {
  employees: initialEmployees,
  theme: localStorage.getItem('SYSTEM_ENVIRONMENT_THEME') || 'light', // light or dark
};

// Reducer Function
function appReducer(state, action) {
  let updatedEmployees;

  switch (action.type) {
    case 'HYDRATE_STORAGE':
      // Only pull API files if the user has no existing local modifications
      if (state.employees.length === 0) {
        localStorage.setItem('WORKFORCE_REGISTRY_DATA', JSON.stringify(action.payload));
        return { ...state, employees: action.payload };
      }
      return state;

    case 'SET_EMPLOYEES':
      localStorage.setItem('WORKFORCE_REGISTRY_DATA', JSON.stringify(action.payload));
      return { ...state, employees: action.payload };

    case 'ADD_EMPLOYEE':
      updatedEmployees = [action.payload, ...state.employees];
      localStorage.setItem('WORKFORCE_REGISTRY_DATA', JSON.stringify(updatedEmployees));
      return { ...state, employees: updatedEmployees };

    case 'UPDATE_EMPLOYEE':
      updatedEmployees = state.employees.map(emp => emp.id === action.payload.id ? action.payload : emp);
      localStorage.setItem('WORKFORCE_REGISTRY_DATA', JSON.stringify(updatedEmployees));
      return { ...state, employees: updatedEmployees };

    case 'DELETE_EMPLOYEE':
      updatedEmployees = state.employees.filter(emp => emp.id !== action.payload);
      localStorage.setItem('WORKFORCE_REGISTRY_DATA', JSON.stringify(updatedEmployees));
      return { ...state, employees: updatedEmployees };

    case 'TOGGLE_THEME':
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('SYSTEM_ENVIRONMENT_THEME', nextTheme);
      return { ...state, theme: nextTheme };

    default:
      return state;
  }
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};