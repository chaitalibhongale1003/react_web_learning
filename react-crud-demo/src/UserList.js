import React from 'react';

function UserList({ users, deleteUser, setEditUser }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: '1px solid gray',
            margin: '10px',
            padding: '10px'
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <button onClick={() => setEditUser(user)}>
            Edit
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: '10px' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;