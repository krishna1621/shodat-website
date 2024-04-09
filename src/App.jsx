import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import SolutionAi from "./Components/SolutionAI/SolutionAi";
import ShodatAI from "./Components/ShodatAI/ShodatAI";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar1/Navbar";
import FinalFooter from "./Components/Footer/FinalFooter";
import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="md:flex md:justify-center">
          <Navbar id="navbar" />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutionAI" element={<SolutionAi />} />
            <Route path="/shodatAI" element={<ShodatAI />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes for additional pages */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
