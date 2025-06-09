import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from '@/layout/landingPages/footer';

//pages frontend
import PlantGuide from '@/pages/landingPages/plantGuide';
import Encyclopedia from '@/pages/landingPages/encyclopedia';
import CherryTomato from '@/pages/landingPages/cherryTomato';
import BeefsteakTomato from '@/pages/landingPages/beefsteakTomato';
import RomaTomato from '@/pages/landingPages/romaTomato';
import HeirloomTomato from '@/pages/landingPages/heirloomTomato';
import ArtikelDetail from '@/components/landingPages/artikel/artikelDetail';
import ArtikelDetailWatering from '@/components/landingPages/artikel/artikelDetailWatering';
import HomePage from '@/pages/landingPages/homePage';
import IdentifyPlant from '@/pages/landingPages/IdentifyPlant';

//pages dashboard
import Dashboard from '@/pages/dashboard/dashboard'; 
import ForgetPassword from '@/pages/auth/forgetPassword';
import ResetPassword from '@/pages/auth/resetPassword';
import Register from '@/pages/auth/register';
import Login from '@/pages/auth/login';

import CameraCapture from '@/components/landingPages/capture/cameraCapture';
import NotificationModal from '@/components/landingPages/notifikasi/notificationModal';

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Tailwind Layout */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/plant-guide" element={<PlantGuide />} />
          <Route path="/plant-guide/cherry-tomato" element={<CherryTomato />} />
          <Route path="/plant-guide/beefsteak-tomato" element={<BeefsteakTomato />} />
          <Route path="/plant-guide/roma-tomato" element={<RomaTomato />} />
          <Route path="/plant-guide/heirloom-tomato" element={<HeirloomTomato />} />         
          <Route path="/plant-guide/artikel-detail" element={<ArtikelDetail />} />
          <Route path="/plant-guide/artikel-detail-watering" element={<ArtikelDetailWatering />} />
          <Route path="/plant-guide/artikel-detail-plant-problems" element={<ArtikelDetail />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/identify-plant" element={<IdentifyPlant />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/capture" element={<CameraCapture />} />
          <Route path="/notification" element={<NotificationModal />} />
      </Routes>

      <Footer />
      
    </>
  );
}

export default App;
