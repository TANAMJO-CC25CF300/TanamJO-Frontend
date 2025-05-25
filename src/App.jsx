import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card2 from "./Components/Card2";
import image1 from "./assets/tomato1.png";

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
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
