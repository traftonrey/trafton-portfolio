import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/About";

// css
import "./styles/index.css";


const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default App;
