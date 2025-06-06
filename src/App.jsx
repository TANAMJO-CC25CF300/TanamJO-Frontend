import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/home/PlantGuide';
import Encyclo from './components/home/Encyclo';
import HeaderDashboard from './components/dashboard/Header-dashboard';
import LeftSidebar from './components/dashboard/Left-Sidebar';

function App() {
  return (
    <>
      <HeaderDashboard />
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<PlantGuide/>} />
            <Route path="/plant-guide" element={<PlantGuide />} />
            <Route path="/encyclopedia" element={<Encyclo />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;