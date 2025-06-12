import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "@/layout/landingPages/footer";
import BackToTop from "@/components/common/BackToTop";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Landing Pages
import HomePage from "@/pages/landingPages/homePage";
import PlantGuide from "@/pages/landingPages/plantGuide";
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
import BlogArtikel from "@/components/landingPages/artikel/blogArtikel";

// Auth Pages
import ForgetPassword from "@/pages/auth/forgetPassword";
import ResetPassword from "@/pages/auth/resetPassword";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";

// Components
import NotificationModal from "@/components/landingPages/notifikasi/notificationModal";

// Dashboard
import Dashboard from "@/pages/dashboard/dashboard";
import MyPlantEmptyPage from "@/pages/dashboard/MyPlantEmptyPage";
import MyPlantPage from "@/pages/dashboard/MyPlantPage";
import ProfilePage from "@/pages/dashboard/user/profile";
import UpdatePasswordPage from "@/pages/dashboard/user/update-password";
import MainIdentifyPlant from "@/pages/dashboard/MainIdentifyPlant";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root to home-page */}
        <Route path="/" element={<Navigate to="/home-page" replace />} />

        {/* Public Routes (Landing Pages) */}
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/plant-guide" element={<PlantGuide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/plant-guide/cherry-tomato" element={<CherryTomato />} />
        <Route
          path="/plant-guide/beefsteak-tomato"
          element={<BeefsteakTomato />}
        />
        <Route path="/plant-guide/roma-tomato" element={<RomaTomato />} />
        <Route
          path="/plant-guide/heirloom-tomato"
          element={<HeirloomTomato />}
        />
        <Route path="/blog-artikel" element={<BlogArtikel />} />
        <Route path="/plant-guide/artikel-detail" element={<ArtikelDetail />} />
        <Route
          path="/plant-guide/artikel-detail-watering"
          element={<ArtikelDetailWatering />}
        />
        <Route
          path="/plant-guide/artikel-detail-plant-problems"
          element={<ArtikelDetail />}
        />
        <Route
          path="/plantguide/artikelcardutama"
          element={<ArtikelCardUtama />}
        />
        <Route path="/identify-plant" element={<IdentifyPlant />} />
        <Route path="/search-input" element={<SearchInput />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        {/* Protected Routes (Dashboard) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <ProtectedRoute>
              <UpdatePasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MyPlantEmptyPage"
          element={
            <ProtectedRoute>
              <MyPlantEmptyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MyPlantPage"
          element={
            <ProtectedRoute>
              <MyPlantPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MainIdentifyPlant"
          element={
            <ProtectedRoute>
              <MainIdentifyPlant />
            </ProtectedRoute>
          }
        />

        {/* Other Components */}
        <Route path="/notification" element={<NotificationModal />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
