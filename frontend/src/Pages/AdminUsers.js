import { useState } from "react";

const AdminUsers = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mark Wilson", email: "mark@example.com", role: "User" },
    // Add more user data here
  ]);

  const handleDelete = (userId) => {
    // Handle deleting user here
    console.log("Deleting user with id:", userId);
  };

  const handleEdit = (userId) => {
    // Handle editing user here
    console.log("Editing user with id:", userId);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Users</h2>

      {/* Add User Button */}
      <div className="mb-4 text-right">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => console.log("Add User")}
        >
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.role}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

