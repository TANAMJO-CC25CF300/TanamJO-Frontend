import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/home/PlantGuide';
import Encyclo from './components/home/Encyclo';
import HeaderDashboard from './components/dashboard/Header-dashboard';
import LeftSidebar from './components/dashboard/Left-Sidebar';

// Layout khusus dashboard
function DashboardLayout({ children }) {
  return (
    <>
      <HeaderDashboard />
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlantGuide />} />
      <Route path="/plant-guide" element={<PlantGuide />} />
      <Route path="/encyclopedia" element={<Encyclo />} />
      {/* Route khusus dashboard */}
      <Route path="/dashboard/*" element={
        <DashboardLayout>
          {/* Tambahkan komponen dashboard di sini */}
          <div>Dashboard Content</div>
        </DashboardLayout>
      } />
    </Routes>
  );
}

export default App;