import logo from "@/assets/logo.png";
import {
  ChevronFirst,
  ChevronLast,
  Home,
  Sprout,
  Stethoscope,
  Menu,
  Search,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const mainMenus = [
    { name: "Home", icon: Home, path: "/dashboard/home" },
    { name: "My Plant", icon: Sprout, path: "/dashboard/my-plant" },
    {
      name: "Disease Identify",
      icon: Stethoscope,
      path: "/Disease-Identify",
    },
  ];

  // Untuk dot indicator contoh pada menu Home
  const menuWithDot = ["Home"];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`h-screen bg-white border-r shadow-sm flex flex-col transition-all duration-300 fixed z-30 top-0 left-0 rounded-r-2xl ${
          isOpen ? "w-64" : "w-20"
        } md:relative md:top-0`}
      >
        <nav className="h-full flex flex-col justify-between relative">
          <div>
            {/* Logo Section */}
            <div className="p-4 pb-2 flex justify-between items-center">
              {isOpen ? (
                <img
                  src={logo}
                  alt="logo"
                  className="transition-all duration-300 w-40"
                />
              ) : (
                <button
                  className="p-1.5 rounded-full hover:bg-gray-100 flex items-center justify-center"
                  onClick={() => setIsOpen(true)}
                >
                  <ChevronLast size={32} />
                </button>
              )}
              {isOpen && (
                <button
                  className="p-1.5 rounded-full hover:bg-gray-100 ml-2"
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronFirst size={24} />
                </button>
              )}
            </div>

            {/* Main Menu Section */}
            <div className="px-1 py-2">
              <ul className="space-y-1">
                {mainMenus.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  const Icon = menu.icon;
                  return (
                    <li
                      key={menu.name}
                      className="relative group flex justify-center"
                    >
                      <Link
                        to={menu.path}
                        className={`flex items-center ${
                          isOpen ? "gap-4 px-4" : "px-0"
                        } py-3 rounded-xl transition-colors duration-200 hover:bg-blue-100 group ${
                          isActive
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-700"
                        } ${
                          isOpen
                            ? "justify-start w-full"
                            : "justify-center w-12"
                        }`}
                      >
                        <Icon
                          size={24}
                          className={`${
                            isActive ? "text-blue-700" : "text-gray-600"
                          } group-hover:text-blue-700`}
                        />
                        {/* Dot indicator */}
                        {menuWithDot.includes(menu.name) && (
                          <span
                            className={`ml-2 w-2 h-2 rounded-full bg-blue-500 ${
                              isOpen ? "" : "absolute left-8"
                            }`}
                          ></span>
                        )}
                        {/* Label */}
                        {isOpen && (
                          <span className="transition-all duration-200 origin-left text-sm ml-2">
                            {menu.name}
                          </span>
                        )}
                      </Link>
                      {/* Tooltip saat collapse */}
                      {!isOpen && (
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                          {menu.name}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Divider */}
            <div className="px-2 py-2">
              <div className="h-px bg-gray-200"></div>
            </div>
          </div>
          {/* Logout Button di bawah */}
          <div className="mb-4 px-1">
            <button
              className={`flex items-center ${
                isOpen ? "gap-4 px-4" : "px-0 justify-center w-12"
              } py-3 rounded-xl transition-colors duration-200 hover:bg-red-100 text-red-600 w-full group relative`}
            >
              <LogOut size={24} />
              {isOpen && <span className="text-sm ml-2">Logout</span>}
              {/* Tooltip saat collapse */}
              {!isOpen && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                  Logout
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          {/* <button
            className={`p-2 rounded-full hover:bg-gray-100 absolute top-4 transition-all duration-300 border shadow md:hidden block ${
              isOpen ? "right-[-18px]" : "right-[-18px]"
            }`}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button> */}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-0 mt-14 md:mt-0">
        {/* Your main content goes here */}
      </main>
    </div>
  );
}
