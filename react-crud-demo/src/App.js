import React, { useEffect, useState } from 'react';
import API from './api';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // READ USERS
  const fetchUsers = async () => {
    try {
      const response = await API.get('/users');
      setUsers(response.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE USER
  const addUser = async (user) => {
    try {
      const response = await API.post('/users', user);

      setUsers([response.data , ...users, ]);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE USER
  const updateUser = async (id, updatedUser) => {
    try {
      await API.put(`/users/${id}`, updatedUser);

      const updatedList = users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );

      setUsers(updatedList);
      setEditUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);

      const filteredUsers = users.filter((user) => user.id !== id);

      setUsers(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React CRUD Demo</h1>

      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />

      <hr />

      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;