import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/frontend/home/PlantGuide';
import Encyclo from './components/frontend/home/Encyclo';
import CherryTomato from './components/frontend/home/CherryTomato';
import BeefsteakTomato from './components/frontend/home/Beefsetak_tomato';
import RomaTomato from './components/frontend/home/Roma_tomato';
import HeirloomTomato from './components/frontend/home/Heirloom_tomato';

function App() {
  return (
    <Routes>  
      <Route path="/" element={<PlantGuide/>} />
      <Route path="/plant-guide" element={<PlantGuide />} />
      <Route path="/encyclopedia" element={<Encyclo />} />
      <Route path="/cherry-tomato" element={<CherryTomato />} />
      <Route path="/beefsteak-tomato" element={<BeefsteakTomato />} />
      <Route path="/roma-tomato" element={<RomaTomato />} />
      <Route path="/heirloom-tomato" element={<HeirloomTomato />} />
    </Routes>
  );
}

export default App;