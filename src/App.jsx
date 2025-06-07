import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/home/PlantGuide';
import Encyclo from './components/home/Encyclo';
import Chery_tomato from './components/home/Chery_tomato';
import Beefsetak_tomato from './components/home/Beefsetak_tomato';
import Roma_tomato from './components/home/Roma_tomato';
import Heirloom_tomato from './components/home/Heirloom_tomato';
import DashboardLayout from './components/dashboard/DashboardLayout/LayoutDashboard';

function App() {
  return (
    <>
      <Routes>  
        <Route path="/" element={<PlantGuide/>} />
        <Route path="/plant-guide" element={<PlantGuide />} />
        <Route path="/encyclopedia" element={<Encyclo />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/Chery_tomato" element={<Chery_tomato />} />
        <Route path="/Beefsetak_tomato" element={<Beefsetak_tomato />} />
        <Route path="/roma_tomato" element={<Roma_tomato />} />
        <Route path="/Heirloom_tomato" element={<Heirloom_tomato />} />
      </Routes>
    </>
  );
}

export default App;