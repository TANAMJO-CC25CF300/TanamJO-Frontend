import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card1 from "./components/Card1";
import image1 from "./assets/tomato1.png";
import HomePage from "./pages/landingPages/homePage";
import IdentifyPlant from "./pages/landingPages/IdentifyPlant";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      <IdentifyPlant />
    </BrowserRouter>
  );
}

export default App;
