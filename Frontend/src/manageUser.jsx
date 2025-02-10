'use client';

import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from 'lucide-react';
import "./manageUser.css";

const manageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleEdit = (userId) => {
    // Implement edit functionality
    console.log(`Edit user with id: ${userId}`);
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          fetchUsers(); // Refresh the user list
        } else {
          throw new Error('Failed to delete user');
        }
      })
      .catch(error => console.error("Error deleting user:", error));
    }
  };

  return (
    <div className="container">
      <h2 className="title">Manage Users</h2>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td className="actions">
                  <button onClick={() => handleEdit(user.id)} className="icon-button edit" aria-label="Edit user">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="icon-button delete" aria-label="Delete user">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">
          <p>No users found.</p>
          <button className="button">Add User</button>
        </div>
      )}
    </div>
  );
};

export default manageUser;