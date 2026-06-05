// src/components/EmployeeList.js
import React, { useContext, useState, useMemo, useCallback } from 'react';
import { GlobalContext } from '../context/GlobalState';

const DEPARTMENTS = [
  "Human Resources", "Engineering", "Sales Manager", "Support Specialist", "Accountant",
  "Research Analyst", "Quality Assurance Engineer", "Web Developer", "Chief Executive Officer",
  "Legal Counsel", "Chief Financial Officer"
];

export const EmployeeList = ({ onEdit }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const isDark = state.theme === 'dark';

  const handleDelete = useCallback((id) => { dispatch({ type: 'DELETE_EMPLOYEE', payload: id }); }, [dispatch]);

  const filteredEmployees = useMemo(() => {
    return state.employees.filter(emp => {
      const matchesSearch = emp.firstName?.toLowerCase().includes(searchTerm.toLowerCase());
      const empDept = emp.department || emp.company?.title || 'N/A';
      return matchesSearch && (selectedDepartment === 'All' || empDept === selectedDepartment);
    });
  }, [state.employees, searchTerm, selectedDepartment]);

  return (
    <div>
      {/* Sleek Search Control Panel Filter Header Row */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input 
          type="text" placeholder="🔍 Search database registry index..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 16px', flex: 2, minWidth: '200px', boxSizing: 'border-box',
            border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`, borderRadius: '8px',
            backgroundColor: isDark ? '#111827' : '#f9fafb', color: isDark ? '#ffffff' : '#000000', fontSize: '14px', outline: 'none'
          }}
        />
        <select
          value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}
          style={{
            padding: '10px 16px', flex: 1, minWidth: '150px', boxSizing: 'border-box',
            border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`, borderRadius: '8px',
            backgroundColor: isDark ? '#111827' : '#f9fafb', color: isDark ? '#ffffff' : '#000000', fontSize: '14px', outline: 'none'
          }}
        >
          <option value="All">📁 View All Teams</option>
          {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
        </select>
      </div>

      {/* Modern SaaS Card Table Grid Structure */}
      <div style={{ overflowX: 'auto', borderRadius: '8px', border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: isDark ? '#111827' : '#f9fafb', borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}` }}>
              <th style={{ padding: '14px 18px', fontWeight: '600', color: isDark ? '#9ca3af' : '#4b5563' }}>Employee Identity</th>
              <th style={{ padding: '14px 18px', fontWeight: '600', color: isDark ? '#9ca3af' : '#4b5563' }}>Communication Link</th>
              <th style={{ padding: '14px 18px', fontWeight: '600', color: isDark ? '#9ca3af' : '#4b5563' }}>Operational Branch</th>
              <th style={{ padding: '14px 18px', fontWeight: '600', color: isDark ? '#9ca3af' : '#4b5563', textAlign: 'right' }}>Actions Matrix</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => {
              const currentDept = emp.department || emp.company?.title || 'N/A';
              return (
                <tr key={emp.id} style={{ 
                  borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                  backgroundColor: index % 2 === 0 ? 'transparent' : (isDark ? '#1f2937' : '#f9fafb'),
                  transition: 'background-color 0.15s'
                }}>
                  <td style={{ padding: '14px 18px', fontWeight: '500' }}>{emp.firstName}</td>
                  <td style={{ padding: '14px 18px', color: isDark ? '#9ca3af' : '#4b5563' }}>{emp.email}</td>
                  <td style={{ padding: '14px 18px' }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: '500',
                      backgroundColor: isDark ? '#374151' : '#e0e7ff', color: isDark ? '#e5e7eb' : '#4338ca'
                    }}>{currentDept}</span>
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                    <button onClick={() => onEdit(emp)} style={{
                      padding: '6px 12px', borderRadius: '4px', border: 'none', backgroundColor: 'transparent',
                      color: '#4f46e5', fontWeight: '600', cursor: 'pointer', fontSize: '13px'
                    }}>Edit</button>
                    <button onClick={() => handleDelete(emp.id)} style={{
                      padding: '6px 12px', borderRadius: '4px', border: 'none', backgroundColor: 'transparent',
                      color: '#ef4444', fontWeight: '600', cursor: 'pointer', fontSize: '13px', marginLeft: '8px'
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '30px', textAlign: 'center', color: '#9ca3af' }}>
                  No profiles matching current filter criteria found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};