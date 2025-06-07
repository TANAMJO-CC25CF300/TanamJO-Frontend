import React from "react";
import { Routes, Route } from 'react-router-dom';
import PlantGuide from './components/frontend/home/PlantGuide';
import Encyclo from './components/frontend/home/Encyclo';
import CherryTomato from './components/frontend/home/CherryTomato';
import BeefsteakTomato from './components/frontend/home/BeefsteakTomato';
import RomaTomato from './components/frontend/home/RomaTomato';
import HeirloomTomato from './components/frontend/home/HeirloomTomato';
import Header from './components/users/Layouts/Header';
import LeftSidebar from './components/users/Layouts/LeftSidebar';
import MasterUsers from './components/users/Layouts/MasterUsers';
import Dashboard from './components/users/Dashboard';


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
        <Route path="/CherryTomato" element={<CherryTomato />} />
        <Route path="/BeefsteakTomato" element={<BeefsteakTomato />} />
        <Route path="/RomaTomato" element={<RomaTomato />} />
        <Route path="/HeirloomTomato" element={<HeirloomTomato />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/header" element={<Header />} />
        <Route path="/leftsidebar" element={<LeftSidebar />} />
        <Route path="/masterusers" element={<MasterUsers />} />
      </Routes>
      {/* <LogIn /> */}
    </>
  );
}

export default App;
