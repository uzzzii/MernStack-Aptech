import { useState, useEffect } from "react";

const AdminUsers = () => {
  // State to store users
  const [users, setUsers] = useState([]);
  
  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Retrieve the token from localStorage (or other secure storage)
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Authentication token not found.");
          return;
        }

        const response = await fetch("http://localhost:8000/admin/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Add the token here
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        
        const data = await response.json();
        setUsers(data); // Store users in state
      } catch (error) {
        setError(error.message); // Set error state if something goes wrong
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };

    fetchUsers();
  }, []); // Empty array ensures it runs once when the component mounts

  const handleDelete = async(userId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8000/admin/users/delete/${userId}`,{
        method : "DELETE",
        headers : {
          "Authorization": `Bearer ${token}`,
        }
      });
      const data = await response.json();
    } catch (error) {
      
    }
    
  };

  const handleEdit = (userId) => {
    // Handle editing user here
    console.log("Editing user with id:", userId);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something went wrong
  }

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

      {/* User Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{user.username}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Role Display */}
            <div className="text-center mt-2 mb-4">
              <span className={`inline-block px-4 py-1 rounded-full text-white ${user.isAdmin ? 'bg-green-600' : 'bg-gray-600'}`}>
                {user.isAdmin ? "Admin" : "User"}
              </span>
            </div>

            <div className="flex justify-between mt-4">
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
