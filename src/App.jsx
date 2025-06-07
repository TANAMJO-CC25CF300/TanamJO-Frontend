import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/frontend/home/PlantGuide';
import Encyclo from './components/frontend/home/Encyclo';
import CherryTomato from './components/frontend/home/CherryTomato';
import BeefsteakTomato from './components/frontend/home/Beefsetak_tomato';
import RomaTomato from './components/frontend/home/Roma_tomato';
import HeirloomTomato from './components/frontend/home/Heirloom_tomato';


// import Card1 from "./components/Card1";
// import image1 from "./assets/tomato1.png";
// import HomePage from "./pages/landingPages/homePage";
// import IdentifyPlant from "./pages/landingPages/IdentifyPlant";
// import SignUp from "./pages/loginPages/signUp";
// import LogIn from "./pages/loginPages/logIn";
// import ForgotPassword from "./pages/loginPages/forgotPassword";
// import ResetPassword from "./pages/loginPages/resetPassword";

function App() {
  return (
    <>
    <Routes>  
      <Route path="/" element={<PlantGuide/>} />
      <Route path="/plant-guide" element={<PlantGuide />} />
      <Route path="/encyclopedia" element={<Encyclo />} />
      <Route path="/cherry-tomato" element={<CherryTomato />} />
      <Route path="/beefsteak-tomato" element={<BeefsteakTomato />} />
      <Route path="/roma-tomato" element={<RomaTomato />} />
      <Route path="/heirloom-tomato" element={<HeirloomTomato />} />
    </Routes>
    {/* <LogIn /> */}
    </>
  );
}

export default App;
