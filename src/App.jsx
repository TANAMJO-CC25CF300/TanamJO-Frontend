import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/home/PlantGuide';
import Encyclo from './components/home/Encyclo';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlantGuide/>} />
        <Route path="/plant-guide" element={<PlantGuide />} />
        <Route path="/encyclopedia" element={<Encyclo />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;