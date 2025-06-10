import logo from "@/assets/logo/logo.png";
import {
  ChevronFirst,
  ChevronLast,
  Home,
  Sprout,
  Stethoscope,
  LogOut,
  Menu,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    setIsOpen(!mobile);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const mainMenus = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "My Plant", icon: Sprout, path: "/MyPlant" },
    {
      name: "Disease Identify",
      icon: Stethoscope,
      path: "/Disease-Identify",
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 border border-gray-200 md:hidden"
          style={{ transform: 'translateX(0)' }}
        >
          <Menu size={18} className="text-gray-700" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`min-h-screen bg-white flex flex-col transition-all duration-300 ease-in-out fixed lg:relative z-[46] top-0 left-0
          ${isOpen ? "w-64" : "w-16"} 
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
          border-r border-gray-200 shadow-sm`}
      >
        <nav className="h-full flex flex-col justify-between">
          <div>
            {/* Logo Section */}
            <div className="p-3 flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center">
                {isOpen ? (
                  <img
                    src={logo}
                    alt="logo"
                    className="transition-all duration-300 w-32 object-contain"
                  />
                ) : (
                  <button
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(true)}
                  >
                    <ChevronLast size={20} className="text-gray-600" />
                  </button>
                )}
              </div>
              {isOpen && (
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronFirst size={16} className="text-gray-600" />
                </button>
              )}
            </div>

            {/* Main Menu Section */}
            <div className="px-2 py-3">
              <ul className="space-y-1">
                {mainMenus.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  const Icon = menu.icon;
                  return (
                    <li
                      key={menu.name}
                      className="relative group"
                    >
                      <Link
                        to={menu.path}
                        className={`flex items-center ${
                          isOpen ? "gap-3 px-3" : "justify-center"
                        } py-2 rounded-lg transition-all duration-200 
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        } ${
                          isOpen ? "w-full" : "w-8 mx-auto"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`${
                            isActive ? "text-blue-600" : "text-gray-500"
                          } transition-colors group-hover:text-blue-600 ${
                            !isOpen && "transform group-hover:scale-110 transition-transform"
                          }`}
                        />
                        {isOpen && (
                          <span className="text-sm font-medium transition-all duration-200">
                            {menu.name}
                          </span>
                        )}
                      </Link>
                      {!isOpen && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity delay-75 z-50 whitespace-nowrap">
                          {menu.name}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Logout Button */}
          <div className="p-2 mb-2">
            <button
              className={`flex items-center ${
                isOpen ? "gap-3 px-3" : "justify-center"
              } py-2 rounded-lg transition-all duration-200 hover:bg-red-50 text-red-600 w-full group relative
              ${isOpen ? "hover:pl-4" : "w-8 mx-auto"}`}
            >
              <LogOut 
                size={18} 
                className={`transition-transform group-hover:scale-110 ${
                  isOpen && "group-hover:translate-x-1"
                }`} 
              />
              {isOpen && (
                <span className="text-sm font-medium transition-all duration-200">
                  Logout
                </span>
              )}
              {!isOpen && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity delay-75 z-50 whitespace-nowrap">
                  Logout
                </div>
              )}
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
