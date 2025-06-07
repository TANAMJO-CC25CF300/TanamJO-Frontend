import React from "react";

const MasterLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <main className="flex-1 container mx-auto px-4 py-6">
      {children}
    </main>
  </div>
);

export default MasterLayout;
