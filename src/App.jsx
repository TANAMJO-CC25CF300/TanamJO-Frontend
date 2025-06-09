import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from '@/layout/landingPages/footer';
import BackToTop from '@/components/common/BackToTop';

//pages frontend
import PlantGuide from '@/pages/landingPages/plantGuide';
import AboutUs from '@/pages/landingPages/aboutUs';
import CherryTomato from '@/pages/landingPages/cherryTomato';
import BeefsteakTomato from '@/pages/landingPages/beefsteakTomato';
import RomaTomato from '@/pages/landingPages/romaTomato';
import HeirloomTomato from '@/pages/landingPages/heirloomTomato';
import ArtikelDetail from '@/components/landingPages/artikel/artikelDetail';
import ArtikelDetailWatering from '@/components/landingPages/artikel/artikelDetailWatering';
import ArtikelCardUtama from '@/components/landingPages/artikel/ArtikelCardUtama';
import HomePage from '@/pages/landingPages/homePage';
import IdentifyPlant from '@/pages/landingPages/IdentifyPlant';
import ForgetPassword from '@/pages/auth/forgetPassword';
import ResetPassword from '@/pages/auth/resetPassword';
import Register from '@/pages/auth/register';
import Login from '@/pages/auth/login';
import CameraCapture from '@/components/landingPages/capture/cameraCapture';
import NotificationModal from '@/components/landingPages/notifikasi/notificationModal';

//pages dashboard
import Dashboard from '@/pages/dashboard/dashboard'; 

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Tailwind Layout */}
          <Route path="/" element={<Navigate to="/home-page" replace />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/plant-guide" element={<PlantGuide />} />
          <Route path="/plant-guide/cherry-tomato" element={<CherryTomato />} />
          <Route path="/plant-guide/beefsteak-tomato" element={<BeefsteakTomato />} />
          <Route path="/plant-guide/roma-tomato" element={<RomaTomato />} />
          <Route path="/plant-guide/heirloom-tomato" element={<HeirloomTomato />} />         
          <Route path="/plant-guide/artikel-detail" element={<ArtikelDetail />} />
          <Route path="/plant-guide/artikel-detail-watering" element={<ArtikelDetailWatering />} />
          <Route path="/plant-guide/artikel-detail-plant-problems" element={<ArtikelDetail />} />
          <Route path="/plantguide/artikelcardutama" element={<ArtikelCardUtama />} />
          <Route path="/about-us" element={<AboutUs />} />
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
      <BackToTop />
    </>
  );
}

export default App;
