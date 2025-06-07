import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/plant-guide" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Plant Guide
            </Link>
          </li>
          <li>
            <Link to="/encyclopedia" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Encyclopedia
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
