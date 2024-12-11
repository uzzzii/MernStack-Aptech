import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin/users"
              className="text-lg hover:text-gray-400 transition"
              activeClassName="text-yellow-400"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contacts"
              className="text-lg hover:text-gray-400 transition"
              activeClassName="text-yellow-400"
            >
              Contacts
            </NavLink>
          </li>
          {/* Add more nav items here */}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        </header>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Dynamic Route Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
