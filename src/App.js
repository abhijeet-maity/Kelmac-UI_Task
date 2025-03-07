import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Page1 from "./components/Page1/Page1.jsx";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import BenefitsPage from "./components/BenefitsPage/BenefitsPage.jsx";
import FiveReasonPage from "./components/FiveReasonPage/FiveReasonPage.jsx";
import Page4 from "./components/Page4/Page4.jsx";
import Page5 from "./components/Page5/Page5.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<></>} />
          <Route path="*" element={<></>} />
          <Route path="*" element={<></>} />
          <Route path="*" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
      </Router>
      <Header/>
      <Page1/>
      <Page3/>
      <Page2/>
      <BenefitsPage/>
      <FiveReasonPage/>
      <Page4/>
      <Page5/>
    </div>
  );
}

export default App;
