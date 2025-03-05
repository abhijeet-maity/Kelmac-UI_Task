import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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
    </div>
  );
}

export default App;
