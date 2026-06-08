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
  const themeClass = isDark ? 'dark' : 'light';

  const handleDelete = useCallback((id) => { 
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id }); 
  }, [dispatch]);

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
      <div className="filter-panel">
        <input 
          type="text" 
          placeholder="🔍 Search database registry index..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`search-input ${themeClass}`}
        />
        <select
          value={selectedDepartment} 
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className={`filter-select ${themeClass}`}
        >
          <option value="All">📁 View All Teams</option>
          {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
        </select>
      </div>

      {/* Modern SaaS Card Table Grid Structure */}
      <div className={`table-responsive-container ${themeClass}`}>
        <table className="data-table">
          <thead>
            <tr className={`table-header-row ${themeClass}`}>
              <th className={themeClass}>Employee Identity</th>
              <th className={themeClass}>Communication Link</th>
              <th className={themeClass}>Operational Branch</th>
              <th className={`actions-cell ${themeClass}`}>Actions Matrix</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => {
              const currentDept = emp.department || emp.company?.title || 'N/A';
              const isEven = index % 2 === 0;
              let rowStripeClass = '';
              if (!isEven) {
                rowStripeClass = isDark ? 'stripe-dark' : 'stripe-light';
              }

              return (
                <tr key={emp.id} className={`table-row ${themeClass} ${rowStripeClass}`}>
                  <td style={{ fontWeight: '500' }}>{emp.firstName}</td>
                  <td className={`nav-user ${themeClass}`}>{emp.email}</td>
                  <td>
                    <span className={`dept-badge ${themeClass}`}>{currentDept}</span>
                  </td>
                  <td className="actions-cell">
                    <button onClick={() => onEdit(emp)} className="btn-table-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(emp.id)} className="btn-table-delete">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="4" className="empty-text">
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