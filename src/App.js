import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Page1 from "./components/Page1/Page1.jsx";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import BenefitsPage from "./components/BenefitsPage/BenefitsPage.jsx";


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
    </div>
  );
}

export default App;
