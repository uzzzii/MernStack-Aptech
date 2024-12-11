import { useState } from "react";

const AdminContacts = () => {
  const [contacts] = useState([
    { id: 1, name: "Alice Brown", email: "alice.brown@example.com", message: "Interested in your product." },
    { id: 2, name: "Bob Johnson", email: "bob.johnson@example.com", message: "Looking for a demo." },
    { id: 3, name: "Charlie Lee", email: "charlie.lee@example.com", message: "Inquiry about pricing." },
    // Add more contact data here
  ]);

  const handleDelete = (contactId) => {
    // Handle deleting contact here
    console.log("Deleting contact with id:", contactId);
  };

  const handleView = (contactId) => {
    // Handle viewing contact details here
    console.log("Viewing contact with id:", contactId);
  };

  const handleEdit = (contactId) => {
    // Handle editing contact details here
    console.log("Editing contact with id:", contactId);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Contacts</h2>

      {/* Add Contact Button */}
      <div className="mb-4 text-right">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => console.log("Add New Contact")}
        >
          Add New Contact
        </button>
      </div>

      {/* Contacts Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Message</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleView(contact.id)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(contact.id)}
                    className="text-yellow-600 hover:text-yellow-800 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
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

export default AdminContacts;
