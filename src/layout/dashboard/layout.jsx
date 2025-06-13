import React, { useState, useEffect } from "react";
import LeftSidebar from "./left-sidebar";
import Header from "./header";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <LeftSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isMobile={isMobile}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <Header isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Main Content Area */}
          <div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 overflow-auto">
            <div className="max-w-[1600px] mx-auto w-full">{children}</div>
          </div>

          {/* Footer */}
          <footer className="w-full text-center text-xs text-gray-400 py-4">
            © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
          </footer>
        </div>
      </div>
    </div>
  );
}
