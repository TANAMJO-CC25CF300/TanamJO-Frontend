import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card1 from "./components/Card1";
import image1 from "./assets/tomato1.png";
import HomePage from "./pages/landingPages/homePage";

function App() {
  return (
    // <div>
    //   <h1>Hello World</h1>
    //   <Card2
    //     image={image1}
    //     type="FERTILIZER"
    //     title="Harvest Concepts"
    //     description="Farming and animal husbandry and discuss with farmers and scientists."
    //   />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Card1/> */}
    </BrowserRouter>
  );
}

export default App;
