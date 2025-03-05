import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";

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
    </div>
  );
}

export default App;
