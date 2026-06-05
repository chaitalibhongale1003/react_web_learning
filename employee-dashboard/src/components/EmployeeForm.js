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

  // Styled Field Components to keep code clean
  const labelStyle = { display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: isDark ? '#d1d5db' : '#374151' };
  const inputStyle = {
    width: '100%', padding: '10px 14px', boxSizing: 'border-box', border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
    borderRadius: '6px', backgroundColor: isDark ? '#1f2937' : '#ffffff', color: isDark ? '#ffffff' : '#000000',
    fontSize: '14px', outline: 'none'
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 0 }}>
      <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
        {currentEmployee ? "✏️ Edit Employee Operations" : "➕ Register New Profile Node"}
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input ref={inputRef} name="firstName" value={values.firstName} onChange={handleChange} style={inputStyle} placeholder="John Doe" />
          {errors.firstName && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0' }}>{errors.firstName}</p>}
        </div>
        
        <div>
          <label style={labelStyle}>Email Address</label>
          <input name="email" value={values.email} onChange={handleChange} style={inputStyle} placeholder="john@company.com" />
          {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0' }}>{errors.email}</p>}
        </div>

        <div>
          <label style={labelStyle}>Operational Department Assignment</label>
          <select name="department" value={values.department} onChange={handleChange} style={inputStyle}>
            {DEPARTMENTS.map((dept) => <option key={dept} value={dept}>{dept}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '25px' }}>
        {currentEmployee && (
          <button type="button" onClick={clearEdit} style={{
            padding: '10px 20px', borderRadius: '6px', border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
            backgroundColor: 'transparent', color: isDark ? '#d1d5db' : '#4b5563', cursor: 'pointer', fontSize: '14px', fontWeight: '500'
          }}>
            Cancel Action
          </button>
        )}
        <button type="submit" style={{
          padding: '10px 24px', borderRadius: '6px', border: 'none', backgroundColor: '#4f46e5', color: '#ffffff',
          cursor: 'pointer', fontSize: '14px', fontWeight: '600', boxShadow: '0 2px 4px 0 rgba(79, 70, 229, 0.2)'
        }}>
          {currentEmployee ? "Save Changes" : "Create Profile Record"}
        </button>
      </div>
    </form>
  );
};