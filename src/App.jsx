import React from "react";
import { Routes, Route } from 'react-router-dom';

//pages frontend
import PlantGuide from '@/pages/landingPages/plantGuide';
import Encyclopedia from '@/pages/landingPages/encyclopedia';
import CherryTomato from '@/pages/landingPages/cherryTomato';
import BeefsteakTomato from '@/pages/landingPages/beefsteakTomato';
import RomaTomato from '@/pages/landingPages/romaTomato';
import HeirloomTomato from '@/pages/landingPages/heirloomTomato';
import ArtikelDetail from '@/pages/landingPages/artikelDetail';
import HomePage from '@/pages/landingPages/homePage';

//pages dashboard
import Dashboard from '@/pages/dashboard/dashboard'; 

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
        {/* Routes with Tailwind Layout */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/plant-guide" element={<PlantGuide />} />
          <Route path="/plant-guide/cherry-tomato" element={<CherryTomato />} />
          <Route path="/plant-guide/beefsteak-tomato" element={<BeefsteakTomato />} />
          <Route path="/plant-guide/roma-tomato" element={<RomaTomato />} />
          <Route path="/plant-guide/heirloom-tomato" element={<HeirloomTomato />} />
          <Route path="/plant-guide/artikel-detail" element={<ArtikelDetail />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* <LogIn /> */}
    </>
  );
}

export default App;
