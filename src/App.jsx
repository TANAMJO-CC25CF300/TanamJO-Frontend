import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card1 from "./components/Card1";
import image1 from "./assets/tomato1.png";
import HomePage from "./pages/landingPages/homePage";
import IdentifyPlant from "./pages/landingPages/IdentifyPlant";
import SignUp from "./pages/loginPages/signUp";
import LogIn from "./pages/loginPages/logIn";
import ForgotPassword from "./pages/loginPages/forgotPassword";
import ResetPassword from "./pages/loginPages/resetPassword";
// import AppRouter from './routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      {/* <IdentifyPlant /> */}
      {/* <HomePage /> */}
      {/* <SignUp /> */}
      <LogIn />
    </BrowserRouter>
  );
}

export default App;
