// src/components/EmployeeForm.js
import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useForm } from '../hooks/useForm';

const DEPARTMENTS = [
  "Human Resources", "Engineering", "Sales Manager", "Support Specialist",
  "Accountant", "Research Analyst", "Quality Assurance Engineer",
  "Web Developer", "Chief Executive Officer", "Legal Counsel", "Chief Financial Officer"
];

const validateEmployee = (values) => {
  let errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is mandatory";
  if (!values.email.includes('@')) errors.email = "Provide a valid corporate email profile";
  return errors;
};

export const EmployeeForm = ({ currentEmployee, clearEdit }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const inputRef = useRef(null);
  const isDark = state.theme === 'dark';
  const themeClass = isDark ? 'dark' : 'light';

  const { values, errors, handleChange, validateForm, handleReset } = useForm(
    { firstName: '', email: '', department: 'Human Resources' },
    validateEmployee
  );

  useEffect(() => { if (inputRef.current) inputRef.current.focus(); }, [currentEmployee]);

  useEffect(() => {
    if (currentEmployee) {
      handleReset({
        ...currentEmployee,
        department: currentEmployee.department || currentEmployee.company?.title || 'Human Resources'
      });
    } else {
      handleReset({ firstName: '', email: '', department: 'Human Resources' });
    }
  }, [currentEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (currentEmployee) {
      dispatch({ type: 'UPDATE_EMPLOYEE', payload: { ...values, company: { title: values.department } } });
      clearEdit();
    } else {
      dispatch({ type: 'ADD_EMPLOYEE', payload: { ...values, id: Date.now(), company: { title: values.department } } });
    }
    handleReset({ firstName: '', email: '', department: 'Human Resources' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="card-title">
        {currentEmployee ? "✏️ Edit Employee Operations" : "➕ Register New Profile Node"}
      </h3>
      
      <div className="form-grid">
        <div className="form-group">
          <label className={`form-label ${themeClass}`}>Full Name</label>
          <input 
            ref={inputRef} 
            name="firstName" 
            value={values.firstName} 
            onChange={handleChange} 
            className={`form-input ${themeClass}`} 
            placeholder="John Doe" 
          />
          {errors.firstName && <p className="error-msg">{errors.firstName}</p>}
        </div>
        
        <div className="form-group">
          <label className={`form-label ${themeClass}`}>Email Address</label>
          <input 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            className={`form-input ${themeClass}`} 
            placeholder="john@company.com" 
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label className={`form-label ${themeClass}`}>Operational Department Assignment</label>
          <select 
            name="department" 
            value={values.department} 
            onChange={handleChange} 
            className={`form-input ${themeClass}`}
          >
            {DEPARTMENTS.map((dept) => <option key={dept} value={dept}>{dept}</option>)}
          </select>
        </div>
      </div>

      <div className="form-actions">
        {currentEmployee && (
          <button 
            type="button" 
            onClick={clearEdit} 
            className={`btn-cancel ${themeClass}`}
          >
            Cancel Action
          </button>
        )}
        <button type="submit" className="btn-submit">
          {currentEmployee ? "Save Changes" : "Create Profile Record"}
        </button>
      </div>
    </form>
  );
};