import React, { useState, useEffect } from 'react';

function UserForm({ addUser, editUser, updateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email
    };

    if (editUser) {
      updateUser(editUser.id, userData);
    } else {
      addUser(userData);
    }

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editUser ? 'Edit User' : 'Add User'}</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">
        {editUser ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default UserForm;