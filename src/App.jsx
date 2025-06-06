import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/home/PlantGuide';
import Encyclo from './components/home/Encyclo';
import Dashboard from './components/dashboard/Index';
import Chery_tomato from './components/home/Chery_tomato';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlantGuide/>} />
        <Route path="/plant-guide" element={<PlantGuide />} />
        <Route path="/encyclopedia" element={<Encyclo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/houseplants" element={<Houseplants />} />
      </Routes>
    </>
  );
}

export default App;