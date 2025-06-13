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
import { Link, useLocation } from "react-router-dom";

export default function LeftSidebar({ isOpen, setIsOpen, isMobile }) {
  const location = useLocation();

  const mainMenus = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "My Plant", icon: Sprout, path: "/MyPlantEmptyPage" },
    {
      name: "Disease Identify",
      icon: Stethoscope,
      path: "/MainIdentifyPlant",
    },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`min-h-screen bg-white flex flex-col lg:relative z-[46] top-0 left-0
          ${isOpen ? "w-64" : "w-16"} 
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
          border-r border-gray-200 shadow-sm`}
      >
        <nav className="h-full flex flex-col justify-between">
          <div>
            {/* Logo Section */}
            <div className="p-3 flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center">
                {isOpen ? (
                  <img src={logo} alt="logo" className="w-32 object-contain" />
                ) : (
                  <button
                    className="p-1.5 rounded-lg"
                    onClick={() => setIsOpen(true)}
                  >
                    <ChevronLast size={20} className="text-gray-600" />
                  </button>
                )}
              </div>
              {isOpen && (
                <button
                  className="p-1.5 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronFirst size={16} className="text-gray-600" />
                </button>
              )}
            </div>

            {/* Main Menu Section */}
            <div className="px-3 py-4">
              <ul className="space-y-7">
                {mainMenus.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  const Icon = menu.icon;
                  return (
                    <li key={menu.name} className="relative group">
                      <Link
                        to={menu.path}
                        className={`flex items-center ${
                          isOpen ? "gap-4 px-4" : "justify-center"
                        } py-2.5 rounded-xl
                        ${
                          isActive
                            ? "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-600 font-semibold shadow-sm"
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-emerald-600"
                        } ${isOpen ? "w-full" : "w-10 mx-auto"}`}
                      >
                        <Icon
                          size={20}
                          className={`${
                            isActive ? "text-emerald-600" : "text-gray-500"
                          } group-hover:text-emerald-600`}
                        />
                        {isOpen && (
                          <span className="text-sm font-medium tracking-wide">
                            {menu.name}
                          </span>
                        )}
                      </Link>
                      {!isOpen && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-gray-800/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 z-50 whitespace-nowrap shadow-lg">
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
              } py-2 rounded-lg hover:bg-red-50 text-red-600 w-full group relative
              ${isOpen ? "" : "w-8 mx-auto"}`}
            >
              <LogOut size={18} className={`${isOpen && ""}`} />
              {isOpen && <span className="text-sm font-medium">Logout</span>}
              {!isOpen && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 z-50 whitespace-nowrap">
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
