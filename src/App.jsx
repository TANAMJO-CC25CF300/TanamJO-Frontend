import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "@/layout/landingPages/footer";
import BackToTop from "@/components/common/BackToTop";

// Landing Pages
import HomePage from "@/pages/landingPages/homePage";
import PlantGuide from "@/pages/landingPages/plantGuide";
import Encyclopedia from "@/pages/landingPages/encyclopedia";
import AboutUs from "@/pages/landingPages/aboutUs";
import CherryTomato from "@/pages/landingPages/cherryTomato";
import BeefsteakTomato from "@/pages/landingPages/beefsteakTomato";
import RomaTomato from "@/pages/landingPages/romaTomato";
import HeirloomTomato from "@/pages/landingPages/heirloomTomato";
import ArtikelDetail from "@/components/landingPages/artikel/artikelDetail";
import ArtikelDetailWatering from "@/components/landingPages/artikel/artikelDetailWatering";
import ArtikelCardUtama from "@/components/landingPages/artikel/ArtikelCardUtama";
import IdentifyPlant from "@/pages/landingPages/IdentifyPlant";
import SearchInput from "@/components/common/SearchInput";

// Auth Pages
import ForgetPassword from "@/pages/auth/forgetPassword";
import ResetPassword from "@/pages/auth/resetPassword";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";

// Components
import CameraCapture from "@/components/landingPages/capture/cameraCapture";
import NotificationModal from "@/components/landingPages/notifikasi/notificationModal";

// Dashboard
import Dashboard from "@/pages/dashboard/dashboard";
import LeftSidebar from "@/layout/dashboard/left-sidebar";
import MyPlant from "@/pages/dashboard/MyPlantEmptyPage";
import AddPlant from "@/components/MyPlant/AddPlant";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";
import MyPlantPage from "@/pages/dashboard/MyPlantPage";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root to home-page */}
        <Route path="/" element={<Navigate to="/home-page" replace />} />

        {/* Landing Pages */}
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/plant-guide" element={<PlantGuide />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/plant-guide/cherry-tomato" element={<CherryTomato />} />
        <Route path="/plant-guide/beefsteak-tomato" element={<BeefsteakTomato />} />
        <Route path="/plant-guide/roma-tomato" element={<RomaTomato />} />
        <Route path="/plant-guide/heirloom-tomato" element={<HeirloomTomato />} />
        <Route path="/plant-guide/artikel-detail" element={<ArtikelDetail />} />
        <Route path="/plant-guide/artikel-detail-watering" element={<ArtikelDetailWatering />} />
        <Route path="/plant-guide/artikel-detail-plant-problems" element={<ArtikelDetail />} />
        <Route path="/plantguide/artikelcardutama" element={<ArtikelCardUtama />} />
        <Route path="/identify-plant" element={<IdentifyPlant />} />
        <Route path="/search-input" element={<SearchInput />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<LeftSidebar />} />
        <Route path="/MyPlant" element={<MyPlant />} />
        <Route path="/AddPlant" element={<AddPlant />} />
        <Route path="/CardPlant" element={<CardPlant />} />
        <Route path="/DailyTasks" element={<DailyTasks />} />
        <Route path="/MyPlantPage" element={<MyPlantPage />} />

        {/* Other Components */}
        <Route path="/capture" element={<CameraCapture />} />
        <Route path="/notification" element={<NotificationModal />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
