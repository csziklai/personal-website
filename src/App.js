import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MentorMatcher from './pages/MentorMatcher';
import TealEvents from './pages/TealEvents';
import AclaraONE from './pages/AclaraONE';
import Lifegame from './pages/Lifegame';
import Interpreter from './pages/Interpreter';
import RISCV from './pages/RISC-V';
import Farming from './pages/Farming';
import TypeChecker from './pages/TypeChecker';
import SpecTec from './pages/SpecTec';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/lifegame" element={<Lifegame />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="/riscv" element={<RISCV />} />
          <Route path="/mentor-matcher" element={<MentorMatcher />} />
          <Route path="/tealevents" element={<TealEvents />} />
          <Route path="/aclaraone" element={<AclaraONE />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/typechecker" element={<TypeChecker />} />
          <Route path="/spectec" element={<SpecTec />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
