import React from "react";
import { Routes, Route } from "react-router";

//pages frontend
import PlantGuide from "@/pages/landingPages/plantGuide";
import Encyclopedia from "@/pages/landingPages/encyclopedia";
import CherryTomato from "@/pages/landingPages/cherryTomato";
import BeefsteakTomato from "@/pages/landingPages/beefsteakTomato";
import RomaTomato from "@/pages/landingPages/romaTomato";
import HeirloomTomato from "@/pages/landingPages/heirloomTomato";
import HomePage from "@/pages/landingPages/homePage";
import LeftSidebar from "@/layout/dashboard/left-sidebar";
import IdentifyPlant from "@/pages/landingPages/IdentifyPlant";
import MyPlant from "@/pages/dashboard/MyPlantEmptyPage";
import AddPlant from "@/components/MyPlant/AddPlant";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";
import MyPlantPage from "@/pages/dashboard/MyPlantPage";

//pages dashboard
import Dashboard from "@/pages/dashboard/dashboard";
import { Sidebar } from "lucide-react";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/plant-guide" element={<PlantGuide />} />
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
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<LeftSidebar />} />
        <Route path="/Disease-Identify" element={<IdentifyPlant />} />
        <Route path="/MyPlant" element={<MyPlant />} />
        <Route path="/AddPlant" element={<AddPlant />} />
        <Route path="/CardPlant" element={<CardPlant />} />
        <Route path="/DailyTasks" element={<DailyTasks />} />
        <Route path="/MyPlantPage" element={<MyPlantPage />} />
      </Routes>

      {/* <LogIn /> */}
    </>
  );
}

export default App;
