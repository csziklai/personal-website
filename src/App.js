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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Lifegame" element={<Lifegame />} />
          <Route path="/MentorMatcher" element={<MentorMatcher />} />
          <Route path="/TealEvents" element={<TealEvents />} />
          <Route path="/AclaraONE" element={<AclaraONE />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
